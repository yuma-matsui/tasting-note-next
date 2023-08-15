import { DOMAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "rounded-full py-2 border-transparent text-white text-center",
  defaultVariants: {
    size: "sm",
  },
  variants: {
    color: {
      ["outline-red"]: "bg-transparent border border-theme-red text-theme-red",
      ["outline-white"]: "bg-transparent border border-theme-green text-theme-green",
      red: "bg-theme-red",
      white: "bg-theme-green",
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
type Link = Common & { linkProps: LinkProps };

const isButton = (props: Button | Link): props is Button => {
  return "button" in props;
};

export default function BaseButton<T extends string>(props: Button | Link) {
  const { children, stylePayload } = props;
  return isButton(props) ? (
    <button
      type="button"
      className={button(stylePayload)}
      onClick={props.onClick}
      disabled={props.stylePayload.disabled}
    >
      {children}
    </button>
  ) : (
    <Link {...props.linkProps} className={button(stylePayload)}>
      {children}
    </Link>
  );
}
