import React, { useState } from 'react';
import Loaders from '../components/Loaders/loaders';
import { Generation } from '../components/generation/generation';
import { dataFetchHooks } from '../store/customHooks/dataFetchHooks';

const GenerationContainer = () => {
  const { data, loading } = dataFetchHooks('generation');

  return (
    <div>
      { loading && <Loaders isLoading={loading} />}
      { data && !loading && (
        <Generation data={data.data} />
      )}
    </div>
  );
};

export default GenerationContainer;
