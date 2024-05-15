"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Order",
    href: "/dashboard/order",
    icon: DocumentDuplicateIcon,
  },
  { name: "Profile", href: "/dashboard/profil", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="  flex w-36  justify-center    sm:justify-around md:w-48 md:flex-none md:justify-center md:p-2 md:px-3 "
          >
            <div
              className={clsx(
                "flex flex-col    text-gray-800 hover:text-white",
                { " text-white": pathname === link.href }
              )}
            >
              <LinkIcon className="m-auto w-6" />
              <p className="">{link.name}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
