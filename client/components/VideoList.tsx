import React from 'react';
import Link from 'next/link';

const VideoList = ({ data }: any) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {data.items.map(item => {
          const { id, snippet = {} } = item;
          const { thumbnails = {}, resourceId, title } = snippet;

          return (
            <div key={id} className="mt-2">
              <Link
                href={{
                  pathname: '/player/[id]',
                  query: { id: `${resourceId.videoId}` },
                }}
              >
                <img
                  className="cursor-pointer transition duration-150 transform hover:scale-110"
                  src={thumbnails.maxres.url}
                  height={thumbnails.maxres.height}
                  width={thumbnails.maxres.width}
                  alt={title}
                />
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default VideoList;
