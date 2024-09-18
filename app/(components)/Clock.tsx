"use client";

import Head from "next/head";

/* Component for Clock. This is where the 12 and 24 hour clocks will be placed.
    Google Fonts are used. This has been updated in the tailwind.config.ts file.*/

const Clock: React.FC = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
    </div>
  );
};

export default Clock;