import { app } from 'electron';

const baseAppPath = process.env.DEV
  ? `${app.getAppPath()}`
  : `../${app.getAppPath()}`;

const paths = {
  scripts: `${baseAppPath}/scripts`,
  whisper: `${baseAppPath}/whisper`,
  transcribeAudio: `${baseAppPath}/whisper/samples/teste.wav`,
};

export default paths;
