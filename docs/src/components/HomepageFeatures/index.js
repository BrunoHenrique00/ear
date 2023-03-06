import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Easy to use on a daily basis</Translate>,
    Svg: require('@site/static/img/undraw_usability.svg').default,
    description: (
      <Translate>
        Have a good experience when consuming content across the internet.
      </Translate>
    ),
  },
  {
    title: <Translate>Focus on hearing things</Translate>,
    Svg: require('@site/static/img/undraw_think.svg').default,
    description: (
      <Translate>
        Listen to everything that plays inside your computer, from Whatsapp
        audios to a company meeting.
      </Translate>
    ),
  },
  {
    title: <Translate>Accessibility for all</Translate>,
    Svg: require('@site/static/img/undraw_recording.svg').default,
    description: (
      <Translate>
        Ear was created with and built to improve how people with disabilities
        interact with content without subtitles.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
