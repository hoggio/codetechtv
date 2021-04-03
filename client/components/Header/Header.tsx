import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
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
    signOut({
      callbackUrl:
        process.env.NODE_ENV === 'production'
          ? 'https://codetechtv.com/'
          : 'http://localhost:3000/',
    });
  };

  const handleCategories = () => {
    setAnchorEl(null);
    router.push('/categories');
  };

  const handleAbout = () => {
    setAnchorEl(null);
    router.push('/about');
  };
  const handleProfile = () => {
    setAnchorEl(null);
    router.push('/profile');
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
              <LinkButton href="/categories" color="inherit" variant="text">
                Categories
              </LinkButton>
            </div>
            <div className={styles.link}>
              <LinkButton href="/about" color="inherit" variant="text">
                About
              </LinkButton>
            </div>
            {!session && (
              <>
                <div className={styles.link}>
                  <Button variant="text" onClick={handleSignIn} color="inherit">
                    Sign In
                  </Button>
                </div>
              </>
            )}
            {session && (
              <>
                <div className={styles.link}>
                  <LinkButton href="/profile" color="inherit" variant="text">
                    Profile
                  </LinkButton>
                </div>
                <div className={styles.link}>
                  <Button
                    variant="text"
                    onClick={handleSignOut}
                    color="inherit"
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
              color="inherit"
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
            <MenuItem onClick={handleCategories}>Categories</MenuItem>
            <MenuItem onClick={handleAbout}>About</MenuItem>
            {!session && <MenuItem onClick={handleSignIn}>Sign In</MenuItem>}
            {session && [
              <MenuItem key="profile" onClick={handleProfile}>
                Profile
              </MenuItem>,
              <MenuItem key="signout" onClick={handleSignOut}>
                Sign Out
              </MenuItem>,
            ]}
            {/* <Link href="/contact">
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Link> */}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
