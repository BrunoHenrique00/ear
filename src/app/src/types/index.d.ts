export {};

declare global {
  interface Window {
    electron: {
      recordDesktopAudio: () => void;
      stopRecording: () => void;
      transcribe: () => Promise<string>;
      recordDesktopAudioShortCut: (callback) => void;
      stopRecordingShortCut: (callback) => void;
    };
  }
}
