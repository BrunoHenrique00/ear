import { ChildProcess, exec, execFile, spawn } from 'child_process';
import events from 'events';
const soxEmmiter = new events.EventEmitter();

let processSox: null | ChildProcess = null;

const whisperDir = `${__dirname}/../whisper`;

function transcribe(): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      exec(
        `${whisperDir}/main.exe -m ${whisperDir}/ggml-base.bin -f ${__dirname}/../sox.wav -nt -l auto`,
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error in transcriber: ${error.message}`);
            reject(error);
          }
          if (stderr) {
            console.log(`stderr in transcriber: ${stderr}`);
          }
          resolve(stdout);
        },
      );
      // //////////////////////////////////////////////////
      // let text = '';
      // const processWhisper = spawn(`${whisperDir}/main.exe`, [
      //   '-m',
      //   `${whisperDir}/ggml-base.bin`,
      //   '-f',
      //   `${whisperDir}/sox.wav`,
      //   '-nt',
      //   '-l',
      //   'auto',
      // ]);
      // processWhisper.stdout.on('data', data => {
      //   if (data) text += text + data;
      // });
      // processWhisper.on('error', data => {
      //   console.log('Error in whisper spawn: ' + data);
      // });
      // processWhisper.on('close', () => {
      //   resolve(text);
      // });
    } catch (error) {
      reject(error);
      console.log(`CATCH: error in transcriber: ${error.message}`);
    }
  });
}

// SOX COMMANDS
// ${__dirname}/../sox/sox.exe -r 16k -b 16 -v 0.99 -t waveaudio "Mixagem estéreo (Realtek High Definition Audio)" -t wav test.wav

// FFMPEG COMMANDS
// ffmpeg -f dshow -y -i audio="Mixagem estéreo (Realtek High Definition Audio)" -ar 16000 ffmpeg.wav
soxEmmiter.on('record', () => {
  console.log('recording...');
  // processSox = spawn(`ffmpeg`, [
  //   '-f',
  //   'dshow',
  //   '-y',
  //   '-i',
  //   `audio="Mixagem estéreo (Realtek High Definition Audio)"`,
  //   '-ar',
  //   '16000',
  //   'ffmpeg.wav',
  // ]);

  processSox = execFile(
    `${__dirname}/../sox/sox.exe`,
    [
      '-b',
      '16',
      `-v`,
      '0.99',
      '-t',
      'waveaudio',
      'Mixagem estéreo (Realtek High Definition Audio)',
      '-t',
      'wav',
      `test.wav`,
    ],
    err => {
      if (err) console.log('CATHC: ', err);
    },
  );
});

soxEmmiter.on('stop', () => {
  console.log('stopping...');
  if (processSox) {
    processSox.stdin.end();
    processSox.kill();
    exec(`${__dirname}/../sox/sox.exe test.wav -r 16k test.wav`);
  }
  processSox = null;
});

const sox = {
  stop: () => soxEmmiter.emit('stop'),
  record: () => soxEmmiter.emit('record'),
};

const run = async () => {
  sox.record();
  setTimeout(async () => {
    try {
      sox.stop();
      const text = await transcribe();
      console.log('TEXT: ', text);
    } catch (error) {
      console.log('MAIN CATCH: ', error);
    }
  }, 6000);
};
run();
