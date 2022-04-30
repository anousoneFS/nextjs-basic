import Link from "next/link";
import Head from "next/head";
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h3>this is about page</h3>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contract_us">Contract Us</Link>
        </li>
      </ul>
    </div>
  );
}
