import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  searchParams: any;
}

const demoCall = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return "...";
};

export default async function DynamicPage({ searchParams }: Props) {
  const data = await demoCall();

  console.log(searchParams, data);

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
