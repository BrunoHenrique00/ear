#!/bin/sh

import { exec } from 'child_process';
import paths from '../configs/paths';

export default function transcribe(): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(
      `${paths.whisper}/main -m ${paths.whisper}/models/ggml-base.bin -f ${paths.transcribeAudio} -nt -l 'auto'`,
      (error, stdout) => {
        if (error) {
          console.log(`error in transcriber: ${error.message}`);
          reject();
        }
        resolve(stdout);
      },
    );
  });
}
