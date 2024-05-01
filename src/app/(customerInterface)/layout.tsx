import type { Metadata } from "next";
import { Nav, NavList } from "@/components/Nav";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Next-Shop",
  description: "we make your wallet cry",
};

const links = [
  { url: "/", title: "Home" },
  { url: "/products", title: "Products" },
  { url: "/orders", title: "Orders" },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav title="Next-Shop">
        <NavList links={links} />
      </Nav>
      <main className="container m-auto  py-4">{children}</main>
    </>
  );
}
