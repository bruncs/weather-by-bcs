import React from 'react';
import Head from 'next/head';

import Map from '../components/Map';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Weather by BCS</title>
      </Head>
      <Map overlay={<Layout />} />
    </div>
  );
};

export default Home;
