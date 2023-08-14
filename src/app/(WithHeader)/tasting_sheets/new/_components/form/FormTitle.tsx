import { zen_old_mincho } from "@/app/fonts";

export default function FormTitle({ title }: { title: string }) {
  return (
    <h2
      className={`
        w-full
        rounded
      bg-zinc-500
        py-2
        text-center
        text-xl
        font-semibold
      text-white
        ${zen_old_mincho.className}
      `}
    >
      {title}
    </h2>
  );
}
