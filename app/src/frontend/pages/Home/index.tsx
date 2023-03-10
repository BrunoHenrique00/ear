import { Button, Divider, Empty, Layout, Typography } from 'antd';
import { useRef, useState } from 'react';
import LanguageSelector from '../../../frontend/components/LanguageSelector';
import TutorialButton from '../../../frontend/components/TutorialButton';
import DarkModeButton from '../../../frontend/components/DarkModeButton';

const { Content, Header, Footer } = Layout;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState('');

  const listenButtonRef = useRef(null);
  const languageButtonRef = useRef(null);

  const phrases = text.split('.');

  function handleRecord() {
    try {
      setIsRecording(true);
      window.electron.recordDesktopAudio();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleStopRecord() {
    try {
      window.electron.stopRecording();
      setIsRecording(false);
      setIsLoading(true);
      const result = await window.electron.transcribe();
      setText(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRecording(false);
      setIsLoading(false);
    }
  }

  window.electron.recordDesktopAudioShortCut(() => {
    console.log('recordDesktopAudioShortCut');
    if (!isLoading) handleRecord();
  });
  window.electron.stopRecordingShortCut(() => {
    if (isRecording) handleStopRecord();
  });

  return (
    <Layout style={{ height: '100%' }}>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 15,
          backgroundColor: 'inherit',
        }}
      >
        <Button
          onClick={isRecording ? handleStopRecord : handleRecord}
          type="primary"
          loading={isLoading}
          ref={listenButtonRef}
        >
          {isRecording ? 'Parar' : 'Ouvir 👂'}
        </Button>
        <DarkModeButton />
        <div style={{ display: 'flex' }} ref={languageButtonRef}>
          <LanguageSelector />
        </div>
        <TutorialButton
          listenButtonRef={listenButtonRef}
          languageButtonRef={languageButtonRef}
        />
      </Header>
      <Divider>Transcrições</Divider>
      <Content style={{ height: '100%' }}>
        {text &&
          phrases.map(phrase => (
            <Typography style={{ padding: 5 }}>{phrase}</Typography>
          ))}
        {!text && (
          <Empty
            description="Sem transcrições por agora."
            style={{ color: '#f3f8fb' }}
          />
        )}
      </Content>
      <Footer>Projeto de codigo aberto!</Footer>
    </Layout>
  );
}
