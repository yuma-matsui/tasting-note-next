import Image, { StaticImageData } from "next/image";

export default function DemoImage({ alt, src, text }: { alt: string; src: StaticImageData; text: string }) {
  return (
    <div>
      <p className="mb-1">{text}</p>
      <Image src={src} alt={alt} className="rounded-xl border-2 border-black" />
    </div>
  );
}
