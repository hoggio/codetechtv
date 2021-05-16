import React from 'react';
import Link from 'next/link';

const VideoRow = ({ data }: any) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-6">
      <p>More videos:</p>
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
                <div className="cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500   w-full overflow-hidden">
                  <Link
                    key={id}
                    href={{
                      pathname: '/player/[id]',
                      query: { id: `${resourceId.videoId}` },
                    }}
                  >
                    <img
                      src={thumbnails.maxres.url}
                      height={thumbnails.maxres.height}
                      width={thumbnails.maxres.width}
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
