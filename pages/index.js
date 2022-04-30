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
