import { TastingSheetType } from "@/schema/tastingSheetSchema";

import FormControllerButton from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormControllerButton";

export default function FormControllerButtons({
  back,
  color,
  disabled,
  next,
}: {
  back: () => void;
  color: TastingSheetType["color"];
  disabled: boolean;
  next: () => void;
}) {
  return (
    <>
      <FormControllerButton type="back" color={color} disabled={disabled} onClick={back} />
      <FormControllerButton type="forward" color={color} disabled={disabled} onClick={next} />
    </>
  );
}
