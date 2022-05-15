import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import logo from '../../static/img/logo.png';
import autobrrfront from '../../static/img/autobrr-front.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
      <img src={logo} alt="Logo" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className={clsx("button button--info button--lg", styles.button)}
            to="/docs/introduction"
          >
            Introduction
          </Link>
          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            to="/docs/getting-started/installation"
          >
            Get Started
          </Link>
        </div>
      </div>
      <img src={autobrrfront} alt="autobrr" className={clsx("shadow-md", styles.image)}/>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="autobrr">
      <HomepageHeader />
      {<main>
        <HomepageFeatures />
      </main>}
    </Layout>
  );
}