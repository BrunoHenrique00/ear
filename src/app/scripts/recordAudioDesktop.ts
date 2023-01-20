import { exec } from 'child_process';
import { app } from 'electron';

const OUTPUT_FILE_NAME = 'teste';

const PATH = process.env.DEV
  ? `${app.getAppPath()}/scripts`
  : `${app.getAppPath()}/../scripts`;

export function stopRecording() {
  exec('killall sox');
}

export default function recordAudioDesktop() {
  exec(`bash ${PATH}/audio-desktop.sh -o ${OUTPUT_FILE_NAME}.wav`, error => {
    if (error) {
      console.error(`error executing sox: ${error.message}`);
      return;
    }
  });
}
