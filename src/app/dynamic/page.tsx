import { Button } from "@/components/ui/button";
import Link from "next/link";

const demoCall = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return "...";
};

export default async function DynamicPage() {
  const data = await demoCall();

  console.log(data);

  return (
    <div className="container bg-background rounded-md p-4 flex items-center gap-2">
      <Button asChild>
        <Link prefetch href="/">
          Go to home page
        </Link>
      </Button>
    </div>
  );
}
