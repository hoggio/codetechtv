import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from '../Link';
import { useRouter } from 'next/router';
import LinkButton from '../LinkButton';
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Hidden,
  Button,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import Logo from '../Logo';
import styles from './Header.module.css';

export default function MenuAppBar() {
  const [session, loading] = useSession();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    setAnchorEl(null);
    signIn();
  };

  const handleSignOut = () => {
    setAnchorEl(null);
    // router.push('/');
    signOut({
      callbackUrl:
        process.env.NODE_ENV === 'production'
          ? 'https://codetechtv.com/'
          : 'http://localhost:3000/',
    });
  };

  const handleVideos = () => {
    setAnchorEl(null);
    router.push('/videos');
  };
  const handleAbout = () => {
    setAnchorEl(null);
    router.push('/about');
  };

  return (
    <div className={styles.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Hidden only={['xs', 'sm']}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.link}>
              <LinkButton href="/videos" color="primary">
                Videos
              </LinkButton>
            </div>
            <div className={styles.link}>
              <LinkButton href="/about" color="primary">
                About
              </LinkButton>
            </div>
            {!session && (
              <>
                <div className={styles.link}>
                  <Button
                    variant="contained"
                    onClick={handleSignIn}
                    color="primary"
                  >
                    Sign In
                  </Button>
                </div>
              </>
            )}
            {session && (
              <>
                <div className={styles.link}>
                  <Button
                    variant="contained"
                    onClick={handleSignOut}
                    color="primary"
                  >
                    Sign Out
                  </Button>
                </div>
              </>
            )}
            {/* <LinkButton href="/contact" color="inherit">
              Contact
            </LinkButton> */}
          </Hidden>
          <Hidden only={['md', 'lg', 'xl']}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <IconButton
              color="primary"
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenu}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleVideos}>Videos</MenuItem>
            <MenuItem onClick={handleAbout}>About</MenuItem>
            {!session && <MenuItem onClick={handleSignIn}>Sign In</MenuItem>}
            {session && <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>}
            {/* <Link href="/contact">
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Link> */}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
