import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

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
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Download ⏱️
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
