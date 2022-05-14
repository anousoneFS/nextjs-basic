import { useRouter } from "next/router";
export default function Detail() {
  const router = useRouter();
  const id = router.query.newId;
  return <div>this is detail:{id}</div>;
}
