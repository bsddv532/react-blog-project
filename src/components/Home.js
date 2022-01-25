import React from 'react';
import TopHome from './InnerHome/TopHome';
import TheLatest from './InnerHome/TheLatest';
import LatestArticles from './InnerHome/LatestArticles';
import LatestStories from './InnerHome/LatestStories';

const Home = () => {
  return (
    <div>
      <TopHome />
      <TheLatest />
      <LatestArticles />
      <LatestStories />
    </div>
  );
};

export default Home;
