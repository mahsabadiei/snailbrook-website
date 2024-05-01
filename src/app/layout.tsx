import "../styles/globals.css";
import type { Metadata } from "next";
import { baiJamjuree } from "../styles/fonts";
import Header from "../components/ui/header/header";
import MenuModal from "../components/ui/menu-modal/menu-modal";

export const metadata: Metadata = {
  title: "Snailbrook",
  description: "Snailbrook website developed by infusedd.co",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>
        <Header />
        <MenuModal />
        {children}
      </body>
    </html>
  );
}
