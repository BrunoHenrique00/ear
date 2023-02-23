import { BrowserWindow, globalShortcut } from 'electron';

export default function registerShortcuts(mainWindow: BrowserWindow) {
  // Create shortcut to record audio
  let isRecording = true;
  globalShortcut.register('CommandOrControl+X', () => {
    if (isRecording) {
      mainWindow.webContents.send('record:shortcut');
      isRecording = false;
    } else {
      mainWindow.webContents.send('stop-recording:shortcut');
      isRecording = true;
    }
  });
}
