import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getStoryblokApi } from "@storyblok/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home(props:any) {
  return (
    <>
      <Head>
        <title>Jung Talents || Wings to dreams</title>
        <meta name="description" content="Jung Talents" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>
          { props.story ? props.story.name : 'My Site' }
        </h1>
      </main>
    </>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  // load the draft version
  let sbParams: any = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

