import { DOMAttributes } from "react";

import { BaseButton } from "@/components";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { HiBackward, HiForward } from "react-icons/hi2";
import { tv } from "tailwind-variants";

const button = tv({
  slots: {
    back: "ml-2",
    container: "flex items-center justify-center",
    forward: "mr-2",
  },
});

export default function FormControllerButton({
  color,
  disabled,
  onClick,
  text,
  type,
}: {
  color: TastingSheetType["color"];
  disabled: boolean;
  onClick: DOMAttributes<HTMLButtonElement>["onClick"];
  text?: string;
  type: "back" | "forward";
}) {
  const { back, container, forward } = button();
  const isBack = type === "back";
  const _color = isBack ? (`outline-${color}` as const) : color;
  return (
    <BaseButton button onClick={onClick} stylePayload={{ color: _color, disabled }}>
      <div className={container()}>
        {isBack ? (
          <>
            <HiBackward />
            <span className={back()}>{text ?? "戻る"}</span>
          </>
        ) : (
          <>
            <span className={forward()}>{text ?? "次へ"}</span>
            <HiForward />
          </>
        )}
      </div>
    </BaseButton>
  );
}
