import { ipcMain } from 'electron';
import recordAudioDesktop, {
  stopRecording,
} from '../../scripts/recordAudioDesktop';
import transcribe from '../../scripts/transcribe';

export default function registerMainHandlers() {
  ipcMain.handle('record', async () => {
    console.log('MAIN: Started recording!');
    recordAudioDesktop();
  });

  ipcMain.handle('stop-recording', async () => {
    console.log('MAIN: Stopped recording!');
    await stopRecording();
  });

  ipcMain.handle('transcribe', async () => {
    console.log('MAIN: Transcribing...');
    try {
      const result = await transcribe();
      console.log('RESULT: ', result);
      return result;
    } catch (error) {
      console.log('Error on mainHandlers.ts transcriber:', error);
    }
  });
}
