import { Button, Tour, TourProps, Typography } from 'antd';
import { useRef, useState } from 'react';

const Description = () => {
  return (
    <Typography>
      Siga alguns passos antes de usar o Ear.{' '}
      <Button type="link" href="https://ear-app.vercel.app/blog/pt/bem-vindo">
        Seguir Passos!
      </Button>
    </Typography>
  );
};

export default function TutorialButton() {
  const [open, setOpen] = useState<boolean>(false);

  const ref = useRef(null);

  const steps: TourProps['steps'] = [
    {
      title: 'Configure seu computador!',
      description: <Description />,
      target: null,
    },
  ];

  return (
    <>
      <Button type="default" onClick={() => setOpen(true)} ref={ref}>
        Fazer Tour
      </Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
}
