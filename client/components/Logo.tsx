import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/images/bluelogo.png" width={50} height={50} />
    </Link>
  );
};

export default Logo;
