import recordAudioDesktop from './recordAudioDesktop';
import transcribe from './transcribe';

const run = async () => {
  await recordAudioDesktop();
  console.log('Transcribing...');
  const result = await transcribe();
  console.log('Finished! ', result);
  return result;
};

export default run;
