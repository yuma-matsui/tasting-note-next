import Image from "next/image";

import { zen_old_mincho } from "@/app/fonts";

export default function TopTitle() {
  return (
    <div className="my-8 flex">
      <Image src="/images/logo.png" alt="logo" width={64} height={64} />
      <div className={`ml-4 flex flex-col ${zen_old_mincho.className}`}>
        <h1 className="text-3xl font-bold tracking-wider">Tasting Note</h1>
        <p className="mt-1 text-xs leading-6">テイスティングを記録してソムリエに</p>
      </div>
    </div>
  );
}
