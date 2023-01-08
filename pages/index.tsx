import Head from "next/head";
import { useEffect, useState } from "react";
import { Container, QuoteCard } from "../styles/pages/Home";

export default function Home() {
  interface Quote {
    content: string;
    author: string;
  }
  const [quote, setQuote] = useState<Quote>();

  async function getRandomQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h2>Quote Generator</h2>
        <QuoteCard>
          <p> &quot;{quote?.content} &quot;</p>
          <h1>- {quote?.author}</h1>
        </QuoteCard>
        <button onClick={getRandomQuote}>Generate</button>
      </Container>
    </>
  );
}
