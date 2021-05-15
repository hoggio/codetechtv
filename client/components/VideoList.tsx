import React from 'react';
import Link from 'next/link';

const VideoList = ({ data }: any) => {
  return (
    <div className="flex flex-col">
      {data.items.map(item => {
        const { id, snippet = {} } = item;
        const { thumbnails = {}, resourceId, description, title } = snippet;
        const { medium = {} } = thumbnails;
        const descList = description.split('\n');
        const dsc = descList[0];

        return (
          <div key={id} className="mt-6">
            <h2 className="text-md md:text-lg mb-6">{title}</h2>
            <Link
              href={{
                pathname: '/player/[id]',
                query: { id: `${resourceId.videoId}` },
              }}
            >
              <img
                className="cursor-pointer transition duration-150 transform hover:scale-110"
                src={medium.url}
                height={medium.height}
                width={medium.width}
                alt="image"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
