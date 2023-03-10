import { Button, Tour, TourProps, Typography } from 'antd';
import { useState } from 'react';
import useFirstTime from '../hooks/useFirstTime';

const Description = () => {
  return (
    <Typography>
      Siga alguns passos antes de usar o Ear.{' '}
      <Button
        type="link"
        href="https://ear-app.vercel.app/pt/blog/setup-tutorial"
      >
        Seguir Passos!
      </Button>
    </Typography>
  );
};

interface TutorialProps {
  listenButtonRef: React.MutableRefObject<any>;
  languageButtonRef: React.MutableRefObject<any>;
}

export default function TutorialButton({
  listenButtonRef,
  languageButtonRef,
}: TutorialProps) {
  const [open, setOpen] = useState<boolean>(false);
  const { isFirstTime, setIsFirstTime } = useFirstTime();

  const steps: TourProps['steps'] = [
    {
      title: 'Como usar o Ear?',
      description:
        'Para usar apenas clique no botão "Ouvir" e o Ear vai gravar o que está tocando no seu computador e irá parar quando você clicar em "Parar"',
      target: listenButtonRef.current,
    },
    {
      title: 'Melhorar a performance do Ear!',
      description:
        'Aqui você pode selecionar qual idioma provavelmente usará no dia a dia, mas se não souber não tem problema, apenas deixe no "Automático" e o Ear vai cuidar do resto :).',
      target: languageButtonRef.current,
    },
    {
      title: 'Mas antes, configure seu computador!',
      description: <Description />,
      target: null,
    },
  ];

  const needToOpen = isFirstTime || open;
  console.log(languageButtonRef.current);
  console.log(listenButtonRef.current);
  return (
    <>
      <Button type="default" onClick={() => setOpen(true)}>
        Fazer Tour
      </Button>
      <Tour
        open={needToOpen}
        onClose={() => {
          setIsFirstTime(false);
          setOpen(false);
        }}
        steps={steps}
      />
    </>
  );
}
