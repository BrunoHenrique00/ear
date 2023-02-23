import { exec } from 'child_process';
import paths from '../configs/paths';

export function stopRecording() {
  return new Promise((resolve, reject) => {
    exec('killall sox', () => {
      resolve(true);
    });
  });
}

export default function recordAudioDesktop() {
  const process = exec(
    `bash ${paths.scripts}/audio-desktop.sh -o ${paths.transcribeAudio}`,
    (error, output) => {
      if (!error) {
        console.log('Executing FFMPEG ', output);
      } else {
        console.log('Failed to execute FFMPEG ', error);
      }
    },
  );

  process.once;
}
