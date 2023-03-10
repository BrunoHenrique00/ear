import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

type ICallbackEvent = (event: IpcRendererEvent, ...args: any[]) => void;

contextBridge.exposeInMainWorld('electron', {
  recordDesktopAudio: async () => ipcRenderer.invoke('record'),
  stopRecording: async () => ipcRenderer.invoke('stop-recording'),
  transcribe: async () => ipcRenderer.invoke('transcribe'),
  recordDesktopAudioShortCut: async (callback: ICallbackEvent) =>
    ipcRenderer.on('record:shortcut', callback),
  stopRecordingShortCut: async (callback: ICallbackEvent) =>
    ipcRenderer.on('stop-recording:shortcut', callback),
  checkFirstTime: () => ipcRenderer.invoke('checkFirstTime'),
  userPreferences: () => ipcRenderer.invoke('userPreferences'),
  setLanguage: (language: string) =>
    ipcRenderer.invoke('setLanguage', language),
});
