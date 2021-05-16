import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="inline-block h-14 w-14 rounded-full cursor-pointer"
        src="/images/cttv.png"
        width={50}
        height={50}
      />
    </Link>
  );
};

export default Logo;
