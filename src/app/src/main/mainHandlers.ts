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
    stopRecording();
  });

  ipcMain.handle('transcribe', async () => {
    console.log('Transcribing...');
    const result = await transcribe();
    return result;
  });
}
