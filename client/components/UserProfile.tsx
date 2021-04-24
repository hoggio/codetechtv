import { useSession } from 'next-auth/client';

export default function UserProfile() {
  const [session, loading] = useSession();

  return (
    <div>
      {!session && <>Sign In</>}
      {session && (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            <li key={session.user.name}>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img
                  className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src={session.user.image}
                  alt=""
                />
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>{session.user.name}</h3>
                  <p className="text-blue-600">{session.user.email}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// import { Card, CardContent, Typography } from '@material-ui/core';

// const UserProfile = () => {
// const [session, loading] = useSession();

//   return (
//     <div>
//       {!session && <>Sign In</>}
//       {session && (
//         <>
//           <Card>
//             <img src={session.user.image} alt="users image" />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {session.user.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 {session.user.email}
//               </Typography>
//             </CardContent>
//           </Card>
//         </>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
