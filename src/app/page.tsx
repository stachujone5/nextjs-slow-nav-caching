import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const demoCall = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/");

  return {
    data: await data.json(),
    fetched: new Date().toLocaleString(),
  };
};

export default async function Home() {
  const data = await demoCall();

  cookies();
  console.log(JSON.stringify(data));

  return (
    <div className="container bg-background rounded-md p-4 flex items-center gap-2">
      <Button asChild>
        <Link prefetch href="/dynamic">
          Go to dynamic page
        </Link>
      </Button>
      <p>
        <strong>Fetched at:</strong> {data.fetched}
      </p>

      <p className="h-32 overflow-scroll">{JSON.stringify(data.data)}</p>
    </div>
  );
}
