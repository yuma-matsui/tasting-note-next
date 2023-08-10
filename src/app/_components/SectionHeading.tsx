import { zen_old_mincho } from "@/app/fonts";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <h2
      className={`
        ${zen_old_mincho.className}
        mb-5
        border-b
        border-l-8
        border-theme-red
        pb-1
        pl-2
        font-extrabold
        tracking-wider
        text-theme-red
      `}
    >
      {title}
    </h2>
  );
}
