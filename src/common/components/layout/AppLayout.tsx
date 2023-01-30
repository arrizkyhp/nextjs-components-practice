import Head from 'next/head';

import { ChildProps } from '~/types/ChildProps';

const AppLayout = ({ children }: ChildProps) => {
  return (
    <>
      <Head>
        <title>Components Practice 2023</title>
      </Head>
      <div className="min-h-screen">{children}</div>
    </>
  );
};

export default AppLayout;
