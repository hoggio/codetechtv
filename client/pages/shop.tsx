import React from 'react';
import YoutubeList from '../components/YoutubeList';

const shop = () => {
  return (
    <div>
      <div className="bg-white mb-4">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Top YouTube Equipment
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Start recording
            </p>
          </div>
        </div>
      </div>
      <YoutubeList />
    </div>
  );
};

export default shop;
