import Link from './Link';
import LinkButton from './LinkButton';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <LinkButton variant="outlined" color="secondary" href="/">
      <Image src="/images/bluelogo.png" width={50} height={50} />
    </LinkButton>
  );
};

export default Logo;
