import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Hedgehog Lab Quickstart - 3min ⏱️
          </Link>
        </div>

        <p/>
        <iframe src="https://hhlab.dev/?code=print(%20%22Hello%20Hedgehog!%20%5Cn%22%20)%0Aprint(%201%20%2B%202%20)%0Aprint(%20%5B%5B1%2C2%5D%2C%5B3%2C4%5D%5D%20%2B%20%5B%5B2%2C3%5D%2C%5B5%2C6%5D%5D%20)%0Aprint(%20%5B%5B1%2C2%5D%2C%5B3%2C4%5D%5D%20*%2010%20)&auto_run=true" width="100%" height="400" />
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
