import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

const Windows = {
  Icon: require('@site/static/img/Windows-logo.svg').default,
};

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>Ear</Translate>
        </h1>

        <p className="hero__subtitle">
          <Translate>
            Ear is a desktop app that will help you transcribe what is playing
            on your computer
          </Translate>
        </p>

        <p className="hero__subtitle">
          <Translate>Support for Windows only!</Translate>
        </p>
        <Windows.Icon className={styles.windowsIcon} role="img" />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/BrunoHenrique00/ear/releases/download/v1.0.0/ear-win32-x64.zip"
          >
            Download 👂
          </Link>
        </div>
        <iframe
          src="https://www.loom.com/embed/0e102de4990c46a6869e5292967e8a79"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          className={styles.video}
        ></iframe>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} App`}
      description="Ear is a desktop app that will help you transcribe what is playing on your computer"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
