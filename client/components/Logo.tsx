import Link from './Link';
import Image from 'next/image';
import React from 'react';
import { Button } from '@material-ui/core';

const Logo = () => {
  return (
    <Link href="/">
      <Button>
        <Image src="/images/logo.png" width={80} height={80} />
      </Button>
    </Link>
  );
};

export default Logo;
