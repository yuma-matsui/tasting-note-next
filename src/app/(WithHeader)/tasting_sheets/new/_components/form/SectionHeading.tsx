import { tv } from "tailwind-variants";

const heading = tv({
  slots: {
    title: "text-lg font-semibold py-2 px-4 bg-gray-300 border-y border-gray-400 box-content",
    required: "text-theme-red text-sm font-normal block py-1",
    subTitle: "ml-2 text-base font-normal",
  },
});

export default function SectionHeading({
  title,
  required = false,
  subTitle,
}: {
  title: string;
  required?: boolean;
  subTitle?: string | undefined;
}) {
  const { title: titleCls, required: requiredCls, subTitle: subTitleCls } = heading();
  return (
    <>
      <h3 className={titleCls()}>
        {title}
        {subTitle && <span className={subTitleCls()}>{subTitle}</span>}
        {required && <span className={requiredCls()}>2つ選択してください</span>}
      </h3>
    </>
  );
}
