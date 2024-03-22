import { cookies } from "next/headers";

export async function SlowNav() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="bg-foreground p-4 w-full h-10">
      Slow nav fibished loading
    </div>
  );
}
