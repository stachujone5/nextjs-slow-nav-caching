import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Link from "next/link";

const demoCall = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/");

  return data.json();
};

export default async function DynamicPage() {
  const data = await demoCall();

  cookies();

  console.log(JSON.stringify(data));

  return (
    <div className="container bg-background rounded-md p-4 flex items-center gap-2">
      <Button asChild>
        <Link prefetch href="/">
          Go to home page
        </Link>
      </Button>

      <p className="h-32 overflow-scroll">{JSON.stringify(data)}</p>
    </div>
  );
}
