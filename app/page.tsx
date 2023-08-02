import Hero from "./(routes)/(landing)/hero/hero";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
    </main>
  );
}
