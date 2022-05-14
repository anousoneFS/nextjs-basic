import Link from "next/link";
export default function News() {
  return (
    <div>
      hello news
      <ul>
        <li>
          <Link href="/news/detailed">News</Link>
        </li>
      </ul>
    </div>
  );
}
