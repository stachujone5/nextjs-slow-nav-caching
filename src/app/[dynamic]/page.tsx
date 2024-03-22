import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  searchParams: any;
}
export default async function DynamicPage({ searchParams }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

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
