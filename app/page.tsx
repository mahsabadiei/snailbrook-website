import Navbar from "./shared/components/navbar/navbar";
import Hero from "./(routes)/(landing)/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <Hero />
    </main>
  );
}
