import Hero from "./(routes)/(landing)/hero/hero";
import MenuModal from "./shared/components/menu-modal/menu-modal";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ params, searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      {showModal && <MenuModal />}
    </main>
  );
}
