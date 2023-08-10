import { DOMAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "rounded-full py-2 border-transparent text-white cursor-pointer text-center",
  defaultVariants: {
    size: "sm",
  },
  variants: {
    color: {
      green: "bg-theme-green",
      outlineGreen: "bg-transparent border border-theme-green text-theme-green",
      outlineRed: "bg-transparent border border-theme-red text-theme-red",
      red: "bg-theme-red",
    },
    disabled: {
      true: "opacity-25",
    },
    size: {
      sm: "w-32 px-6",
      md: "w-40 px-0",
      lg: "w-44 px-6",
    },
  },
});

type Common = {
  children: ReactNode;
  stylePayload: VariantProps<typeof button>;
};

type Button = Common & { button: boolean; onClick: DOMAttributes<HTMLButtonElement>["onClick"] };
type Link<T extends string> = Common & { linkProps: LinkProps<T> };

const isButton = <T extends string>(props: Button | Link<T>): props is Button => {
  return "button" in props;
};

export default function BaseButton<T extends string>(props: Button | Link<T>) {
  const { children, stylePayload } = props;
  return isButton<string>(props) ? (
    <button type="button" className={button(stylePayload)} onClick={props.onClick}>
      {children}
    </button>
  ) : (
    <Link {...props.linkProps} className={button(stylePayload)}>
      {children}
    </Link>
  );
}
