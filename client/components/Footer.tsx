import React from 'react';
import Image from 'next/image';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <AppBar position="static" color="transparent" className={styles.root}>
      <Toolbar>
        <div className={styles.text}>
          <Typography variant="body1">CodeTech TV</Typography>
        </div>
        <div className={styles.icons}>
          <a
            href="https://www.youtube.com/channel/UCSTOp5FPjNXBmop3o47yZaQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              className={styles.icon}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <YouTubeIcon className={styles.youtube} />
            </IconButton>
          </a>
        </div>
        <div className={styles.icons}>
          <a
            href="https://twitter.com/JeffHogg86"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              className={styles.icon}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <TwitterIcon className={styles.twitter} />
            </IconButton>
          </a>
        </div>
        <a
          href="mailto:codetechtv.jeff@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            className={styles.icon}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Image src="/images/gmail.ico" alt="Gmail" width="30" height="30" />
          </IconButton>
        </a>
      </Toolbar>
    </AppBar>
  );
}

// import React from 'react';
// import Image from 'next/image';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import styles from '../styles/Footer.module.css';
// // import Link from '../components/Link';

// export default function Footer() {
//   return (
//     <BottomNavigation className={styles.footer} showLabels>
//       <BottomNavigationAction
//         className={styles.icon}
//         label="YouTube"
//         icon={<YouTubeIcon style={{ color: '#F70D05' }} />}
//       />

//       <BottomNavigationAction
//         className={styles.icon}
//         label="Twitter"
//         icon={<TwitterIcon style={{ color: '#2B91DA' }} />}
//       />
//       <BottomNavigationAction
//         className={styles.icon}
//         label="Email"
//         icon={
//           <Image src="/images/gmail.ico" alt="Gmail" width="30" height="30" />
//         }
//       />
//     </BottomNavigation>
//   );
// }
