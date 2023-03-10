import IUserPreferences from './userPreferences';

export {};

declare global {
  interface Window {
    electron: {
      recordDesktopAudio: () => void;
      stopRecording: () => void;
      transcribe: () => Promise<string>;
      recordDesktopAudioShortCut: (callback) => void;
      stopRecordingShortCut: (callback) => void;
      checkFirstTime: () => Promise<boolean>;
      userPreferences: () => Promise<IUserPreferences>;
      setLanguage: (language: string) => void;
    };
  }
}
