"use client";
import { UserNav } from "../common/user.nav";
export function UserAppHeader() {
  return (
    <header className="p-2">
      <nav className="flex justify-between items-center">
        <span className="font-extrabold">
          re<span className="font-extralight">Store</span>
        </span>
        <UserNav/>
      </nav>
    </header>
  );
}
