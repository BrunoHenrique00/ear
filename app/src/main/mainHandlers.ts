import { ipcMain } from 'electron';
import store from '../configs/settings';
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

  ipcMain.handle('checkFirstTime', () => {
    try {
      const isFirstTime = store.get('isFirstTime');
      store.set('isFirstTime', false);
      return isFirstTime;
    } catch (error) {
      console.log('Error on mainHandlers.ts checkFirstTime:', error);
    }
  });

  ipcMain.handle('userPreferences', () => {
    try {
      const userPreferences = store.get('userPreferences');
      return userPreferences;
    } catch (error) {
      console.log('Error on mainHandlers.ts userPreferences:', error);
    }
  });

  ipcMain.handle('setLanguage', (_, language) => {
    try {
      const userPreferences = store.set('userPreferences.language', language);
      return userPreferences;
      console.log('Setting language: ', language);
    } catch (error) {
      console.log('Error on mainHandlers.ts userPreferences:', error);
    }
  });
}
