import {
  Button,
  ConfigProvider,
  Divider,
  Empty,
  Layout,
  Typography,
} from 'antd';
import { useState } from 'react';
import TutorialButton from '../../../frontend/components/TutorialButton';

const { Content, Header, Footer } = Layout;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState('');

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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#168efb',
          colorBgBase: '#141414',
          colorBgLayout: '#112a44',
          colorText: '#f3f8fb',
        },
      }}
    >
      <Layout style={{ height: '100%' }}>
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 15,
          }}
        >
          <Button
            onClick={isRecording ? handleStopRecord : handleRecord}
            type="primary"
            loading={isLoading}
          >
            {isRecording ? 'Parar' : 'Ouvir'}
          </Button>
          {/* <ConfigDropdown /> */}
          <TutorialButton />
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
    </ConfigProvider>
  );
}
