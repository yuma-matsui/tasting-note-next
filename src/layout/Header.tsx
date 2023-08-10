import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto w-full px-5 py-4 md:w-162 md:px-0">
      <Link href="/">
        <Image src="/images/logo.png" alt="Header Logo" height={64} width={64} />
      </Link>
    </header>
  );
}
