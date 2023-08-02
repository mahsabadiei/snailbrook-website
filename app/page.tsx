import Hero from "./(routes)/(landing)/hero/hero";
import { MenuModal } from "./shared/components/menuModal/menuModal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      {showModal && <MenuModal />}
    </main>
  );
}
