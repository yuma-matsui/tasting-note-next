import Image from "next/image";
import Link from "next/link";

import { zen_old_mincho } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="mx-auto mt-6 w-full px-5 md:w-162 md:px-0">
      <div className="flex flex-col items-center space-y-3 border-t pt-4">
        <Link href="/">
          <div className="flex">
            <Image src="/images/logo.png" alt="Footer Logo" className="mr-1" width={24} height={24} />
            <p className={zen_old_mincho.className}>Tasting Note</p>
          </div>
        </Link>
        <ul className="flex flex-col items-center space-y-3 text-sm md:flex-row md:items-start md:space-x-4 md:space-y-0">
          <li>
            <Link href="/pp">プライバシーポリシー</Link>
          </li>
          <li>
            <Link href="/tos">利用規約</Link>
          </li>
        </ul>
        <p className="text-gray-700">&copy;2023 yuma-matsui</p>
      </div>
    </footer>
  );
}
