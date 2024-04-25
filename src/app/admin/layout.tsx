import type { Metadata } from "next";
import { Nav, NavList } from "@/components/Nav";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Next-Shop",
  description: "we make your wallet cry",
};

const links = [
  { url: "/admin", title: "Dashboard" },
  { url: "/admin/products", title: "Products" },
  { url: "/admin/users", title: "Users" },
  { url: "/admin/orders", title: "Orders" },
];

export default function RootLayout({
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
