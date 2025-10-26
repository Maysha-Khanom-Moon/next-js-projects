import Hello from "@/components/hello";

export default function Home() {
  console.log("What type of a component am I?");
  
  return (
    <main>
      <div className="text-5xl">Welcome to Next.js!</div>
      <Hello />
    </main>
  );
}
