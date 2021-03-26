import React from 'react';
import Link from '../Link';
import LinkButton from '../LinkButton';
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Hidden,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import Logo from '../Logo';
import styles from './Header.module.css';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Hidden only={['xs', 'sm']}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <LinkButton href="/videos" color="inherit">
              <div className={styles.button}>Videos</div>
            </LinkButton>
            <LinkButton href="/about" color="inherit">
              <div className={styles.button}>About</div>
            </LinkButton>
            {/* <LinkButton href="/contact" color="inherit">
              <div className={styles.button}>Contact</div>
            </LinkButton> */}
          </Hidden>
          <Hidden only={['md', 'lg', 'xl']}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <IconButton
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
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
            <Link href="/videos">
              <MenuItem onClick={handleClose}>Videos</MenuItem>
            </Link>
            <Link href="/about">
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>
            {/* <Link href="/contact">
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Link> */}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
