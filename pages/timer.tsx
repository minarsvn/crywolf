import Container from 'components/Container';
import type { NextPage } from "next";
import Subscribe from 'components/Subscribe';
import NewsletterLink from 'components/NewsletterLink';
import { allNewsletters } from 'contentlayer/generated';
import { pick } from 'lib/utils';
import { useEffect, useState } from "react";

import VideoCard from '../components/VideoCard';

export default function Newsletter({ newsletters }) {

  return (
    <Container
      title="Newsletter – Cry Wolf"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center w-full mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-vio md:text-5xl dark:text-vio">
          Newsletter
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          My newsletter provides a behind-the-scenes look into what I'm working
          on and writing about. I frequently share some of my favorite articles
          I've read, as well as anything fascinating about technology.
        </p>

        <VideoCard
          index="01"
          href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
          length="54:22"
          title="Firestore, Chakra UI, Absolute Imports"
        /> <VideoCard
           index="02"
           href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
           length="54:22"
           title="Firestore, Chakra UI, Absolute Imports"
         />
               <VideoCard
                 index="03"
                 href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
                 length="1:08:30"
                 title="Designing & Building the Dashboard"
               />
               <VideoCard
                 index="04"
                 href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
                 length="1:13:45"
                 title="Firebase Admin with Next.js + SWR"
               />
        </div>
    </Container>
  );
}

export async function getStaticProps() {
  const newsletters = allNewsletters.map((newsletter) =>
    pick(newsletter, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { newsletters } };
}
