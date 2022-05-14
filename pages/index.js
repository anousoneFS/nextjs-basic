import Link from "next/link";
import Head from "next/head";
export default function Index() {
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <h3>Index</h3>
      <ul>
        <li>
          <Link href="/">Index</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contract_us">Contract Us</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </div>
  );
}
