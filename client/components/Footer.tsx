import React from 'react';
import Image from 'next/image';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Footer() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <div>
          <Typography variant="body1">CodeTech TV</Typography>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCSTOp5FPjNXBmop3o47yZaQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <YouTubeIcon />
            </IconButton>
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/JeffHogg86"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <TwitterIcon />
            </IconButton>
          </a>
        </div>
        <a
          href="mailto:codetechtv.jeff@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Image src="/images/gmail.ico" alt="Gmail" width="30" height="30" />
          </IconButton>
        </a>
      </Toolbar>
    </AppBar>
  );
}
