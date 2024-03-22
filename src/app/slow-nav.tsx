import { cookies } from "next/headers";

const demoCall = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return "...";
};

export async function SlowNav() {
  cookies();

  const data = await demoCall();

  console.log(data);

  return (
    <div className="bg-foreground p-4 w-full h-10">
      Slow nav fibished loading
    </div>
  );
}
