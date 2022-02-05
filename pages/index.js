import { Section } from "../components";
import Head from 'next/head';
import { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
  return (
    <Section>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </Section>
  )
}
