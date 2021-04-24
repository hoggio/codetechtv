import React from 'react';
import Link from './Link';

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

// import React from 'react';
// import Link from './Link';

// const VideoList = ({ data }: any) => {
//   return (
//     <Paper>
//       {data.items.map(item => {
// const { id, snippet = {} } = item;
// const { thumbnails = {}, resourceId, description } = snippet;
// const { medium = {} } = thumbnails;
// const descList = description.split('\n');
// const dsc = descList[0];

//         return (
//           <Grid container key={id}>
//             <Grid item lg={4} md={6} sm={12} xs={12}>
//               <div>
//                 <Link
//                   href={{
//                     pathname: '/player/[id]',
//                     query: { id: `${resourceId.videoId}` },
//                   }}
//                 >
//                   <img
//                     src={medium.url}
//                     height={medium.height}
//                     width={medium.width}
//                     alt="image"
//                   />
//                 </Link>
//               </div>
//             </Grid>
//             <Grid item lg={6} md={6} sm={12} xs={12}>
//               <div>
//                 <p>{dsc}</p>
//               </div>
//             </Grid>
//           </Grid>
//         );
//       })}
//     </Paper>
//   );
// };

// export default VideoList;
