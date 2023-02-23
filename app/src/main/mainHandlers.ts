import { ipcMain } from 'electron';
import recordAudioDesktop, {
  stopRecording,
} from '../../scripts/recordAudioDesktop';
import transcribe from '../../scripts/transcribe';

export default function registerMainHandlers() {
  ipcMain.handle('record', async () => {
    console.log('Started recording!');
    recordAudioDesktop();
  });

  ipcMain.handle('stop-recording', async () => {
    console.log('Stopped recording!');
    await stopRecording();
  });

  ipcMain.handle('transcribe', async () => {
    console.log('Transcribing...');
    try {
      const result = await transcribe();
      return result;
    } catch (error) {
      console.log('Error on mainHandlers.ts transcriber:', error);
    }
  });
}
