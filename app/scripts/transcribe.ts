#!/bin/sh

import { exec } from 'child_process';
import store from '../src/configs/settings';
import paths from '../src/configs/paths';
import IUserPreferences from '../src/types/userPreferences';

export default function transcribe(): Promise<string> {
  const { language } = store.get('userPreferences', {
    language: 'auto',
  }) as IUserPreferences;

  return new Promise((resolve, reject) => {
    try {
      // Parse audio to 16Hz, because when recording Whisper cannot transcribe when audio parsed when
      exec(
        `"${paths.sox}/sox.exe" "${paths.transcribeAudio}" -r 16k "${paths.temp}/parsed.wav"`,
        () => {
          exec(
            `"${paths.whisper}/main.exe" -m "${paths.whisper}/ggml-base.bin" -f "${paths.temp}/parsed.wav" -nt -l ${language}`,
            (error, stdout, stderr) => {
              if (error) {
                console.log(`error in transcriber: ${error.message}`);
                reject();
              }
              if (stderr) {
                console.log(`stderr in transcriber: ${stderr}`);
              }
              resolve(stdout);
            },
          );
        },
      );
    } catch (error) {
      console.log(`CATCH: error in transcriber: ${error.message}`);
    }
  });
}
