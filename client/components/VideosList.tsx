import React from 'react';
import Link from 'next/link';

const VideosList = ({ data }: any) => {
  return (
    <div className="flex space-x-6">
      {data.items.map(item => {
        const { id, snippet = {} } = item;
        const { thumbnails = {}, title } = snippet;
        const { maxres = {} } = thumbnails;

        return (
          <div key={id}>
            <h1 className="text-md md:text-2xl lg:text-4xl mb-6">{title}</h1>
            <Link
              href={{
                pathname: '/videos/[id]',
                query: { id: `${id}` },
              }}
            >
              <img
                className="cursor-pointer transition duration-150 transform hover:scale-110"
                src={maxres.url}
                height={maxres.height}
                width={maxres.width}
                alt="image"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideosList;
