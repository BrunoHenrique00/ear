// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
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
});
