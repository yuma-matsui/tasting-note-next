import { ReactNode } from "react";

import { BaseButton } from "@/components";
import { useFormControl } from "@/hooks";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { UseFormWatch } from "react-hook-form";
import { tv } from "tailwind-variants";

import FormControllerButton from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormControllerButton";
import FormControllerButtons from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormControllerButtons";

const buttonContainer = tv({
  base: "w-full flex",
  variants: {
    isSetting: {
      false: "justify-between",
      true: "justify-center",
    },
  },
});

export default function FormController({
  back,
  children,
  currentStepIndex,
  isSubmitValid,
  next,
  watch,
}: {
  back: () => void;
  children: ReactNode;
  currentStepIndex: number;
  isSubmitValid: boolean;
  next: () => void;
  watch: UseFormWatch<TastingSheetType>;
}) {
  const {
    appearanceIsValid,
    color,
    conclusionIsValid,
    flavorIsValid,
    isAppearance,
    isCheckPanel,
    isConclusion,
    isFlavor,
    isSetting,
    isTaste,
    settingIsValid,
    tasteIsValid,
  } = useFormControl({ currentStepIndex, watch });

  return (
    <div className="space-y-4">
      {children}
      <div className={buttonContainer({ isSetting })}>
        {isSetting && (
          <BaseButton button onClick={next} stylePayload={{ color: color ?? "white", disabled: !settingIsValid }}>
            はじめる
          </BaseButton>
        )}
        {isAppearance && (
          <>
            <FormControllerButton type="back" color={color} onClick={() => window.location.reload()} disabled={false} />
            <FormControllerButton type="forward" color={color} onClick={next} disabled={!appearanceIsValid} />
          </>
        )}
        {isFlavor && <FormControllerButtons next={next} back={back} disabled={!flavorIsValid} color={color} />}
        {isTaste && <FormControllerButtons next={next} back={back} disabled={!tasteIsValid} color={color} />}
        {isConclusion && <FormControllerButtons next={next} back={back} disabled={!conclusionIsValid} color={color} />}
        {isCheckPanel && (
          <>
            <FormControllerButton type="back" color={color} onClick={back} disabled={false} />
            <BaseButton stylePayload={{ color }} linkProps={{ href: "/" }}>
              終了
            </BaseButton>
          </>
        )}
      </div>
    </div>
  );
}
