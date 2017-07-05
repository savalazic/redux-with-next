import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

import Head from '../components/Head';
import App from '../components/App';

const Index = () => {
  return (
    <div>
      <Head 
        title='Homepage' 
        description='Lets work on this shit!' />
      <div className='container'>
        <App />
      </div>
    </div>
  );
};

export default withRedux(initStore, null, {})(Index);