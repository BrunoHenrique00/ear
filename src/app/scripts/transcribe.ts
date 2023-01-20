import { exec } from 'child_process';
import { app } from 'electron';

const PATH = process.env.DEV
  ? `${app.getAppPath()}/scripts`
  : `${app.getAppPath()}/../scripts`;

export default function transcribe(): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`python3 ${PATH}/python/transcribe.py`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        reject();
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        reject();
      }
      resolve(stdout);
    });
  });
}
