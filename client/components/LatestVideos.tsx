import React from 'react';
import Link from 'next/link';
// import Link from './Link';

const VideoRow = ({ data }: any) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-6">
      <p>Latest videos:</p>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 pt-2"
      >
        {data.items
          // Optional Limit to 5
          .filter((item, i) => i < 5)
          .map(item => {
            const { id, snippet = {} } = item;
            const { thumbnails = {}, title, resourceId } = snippet;

            return (
              <li key={id} className="relative">
                <div className="cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <Link
                    key={id}
                    href={{
                      pathname: '/player/[id]',
                      query: { id: `${resourceId.videoId}` },
                    }}
                  >
                    <img
                      src={thumbnails.default.url}
                      height={thumbnails.default.height}
                      width={thumbnails.default.width}
                      alt={title}
                    />
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default VideoRow;
