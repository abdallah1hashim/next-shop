"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type nav = {
  children: React.ReactNode;
  title: string;
};

export function Nav({ children, title }: nav) {
  return (
    <nav className="  bg-slate-200 py-2 shadow-md shadow-gray-300">
      <div className=" container m-auto flex w-full justify-between">
        <Link href="/" className=" my-auto text-center text-2xl font-bold ">
          {title}
        </Link>
        {children}
      </div>
    </nav>
  );
}

export function NavLink(
  props: Omit<React.ComponentProps<typeof Link>, "className">,
) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={`btn btn-ghost  ${pathname === props.href && "bg-primary text-gray-50 hover:bg-info"}`}
    />
  );
}
export function NavList({
  links,
}: {
  links: { url: string; title: string }[];
}) {
  return (
    <ul className="flex flex-row gap-2">
      {links.map((link) => (
        <li key={link.url}>
          <NavLink href={link.url}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}
