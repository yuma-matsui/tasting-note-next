import { ReactNode } from "react";

import { tv } from "tailwind-variants";

import SectionHeading from "@/app/(WithHeader)/tasting_sheets/new/_components/form/SectionHeading";

const form = tv({
  slots: {
    container: "flex flex-wrap",
    wrapper: "w-full mt-4 border-black border-2 mb-4",
  },
});

export default function SectionWrapper({
  title,
  children,
  required,
  subTitle,
}: {
  title: string;
  children: ReactNode;
  required?: boolean;
  subTitle?: string;
}) {
  const { container, wrapper } = form();
  return (
    <div className={wrapper()}>
      <SectionHeading title={title} subTitle={subTitle} required={required} />
      <div className={container()}>{children}</div>
    </div>
  );
}
