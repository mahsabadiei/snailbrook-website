import Preloader from "./(routes)/(landing)/preloader/preloader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Preloader />
    </main>
  );
}
