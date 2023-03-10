import { ChildProcess, execFile } from 'child_process';
import paths from '../src/configs/paths';
import { EventEmitter } from 'events';

const soxEmmiter = new EventEmitter();

let process: null | ChildProcess = null;

soxEmmiter.on('record', () => {
  console.log('recording sox...');
  process = execFile(`${paths.sox}/sox.exe`, [
    '-b',
    '16',
    '-v',
    '0.99',
    '-t',
    'waveaudio',
    'default',
    '-t',
    'wav',
    paths.transcribeAudio,
  ]);
});

soxEmmiter.on('stop', () => {
  console.log('stopping sox...');
  if (process) {
    process.stdin.end();
    process.kill();
  }
  process = null;
});

const sox = {
  stop: () => soxEmmiter.emit('stop'),
  record: () => soxEmmiter.emit('record'),
  isRecording: () => !!process,
};

export default sox;
