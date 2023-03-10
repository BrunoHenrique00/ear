import { exec } from 'child_process';
import { platform } from 'os';
import paths from '../src/configs/paths';
import sox from './sox';

export function stopRecording() {
  return new Promise(resolve => {
    if (platform() === 'win32') {
      sox.stop();
      resolve(true);
    }
    exec('killall sox', () => {
      resolve(true);
    });
  });
}

export default function recordAudioDesktop() {
  if (platform() === 'win32') {
    sox.record();
    return;
  }
  exec(
    `bash ${paths.scripts}/audio-desktop.sh -o ${paths.transcribeAudio}`,
    (error, output) => {
      if (!error) {
        console.log('Executing FFMPEG ', output);
      } else {
        console.log('Failed to execute FFMPEG ', error);
      }
    },
  );
}
