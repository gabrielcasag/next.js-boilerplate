import React from 'react';
import Head from 'next/head';
import Hello from '@/components/Hello';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Next.js template</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Hello />
  </>
);

export default Home;
