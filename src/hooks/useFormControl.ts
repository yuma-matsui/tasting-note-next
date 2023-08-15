import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { UseFormWatch } from "react-hook-form";

export default function useFormControl({
  currentStepIndex,
  watch,
}: {
  currentStepIndex: number;
  watch: UseFormWatch<TastingSheetType>;
}) {
  const {
    name,
    appearance: { appearanceColors, appearanceImpressions, brightness, clarity, consistency, intensity },
    color,
    conclusion: { country, decantage, evaluation, glass, grape, optimumTemperature, vintage },
    flavor: { flavorFirstImpressions, flavorFlowers, flavorFruits, flavorImpressions, flavorSpices },
    taste: { acidity, afterTaste, alcohol, astringent, attack, bitterness, sweetness },
    time,
  } = watch();
  const isSetting = currentStepIndex === 0;
  const settingIsValid = Boolean(name && color && time);

  const isAppearance = currentStepIndex === 1;
  const appearanceIsValid =
    appearanceColors.length === 2 &&
    appearanceImpressions.length === 2 &&
    Boolean(brightness && clarity && consistency && intensity);

  const isFlavor = currentStepIndex === 2;
  const flavorIsValid =
    flavorFirstImpressions.length === 2 &&
    flavorFlowers.length === 2 &&
    flavorFruits.length === 2 &&
    flavorImpressions.length === 2 &&
    flavorSpices.length === 2;

  const isTaste = currentStepIndex === 3;
  const isValidWithoutNullable = Boolean(acidity && afterTaste && alcohol && attack && sweetness);
  const tasteRedIsValid = isValidWithoutNullable && Boolean(astringent);
  const tasteWhiteIsValid = isValidWithoutNullable && Boolean(bitterness);
  const tasteIsValid = color === "red" ? tasteRedIsValid : tasteWhiteIsValid;

  const isConclusion = currentStepIndex === 4;
  const isValidWithoutDecantage = Boolean(country && evaluation && glass && grape && optimumTemperature && vintage);
  const conclusionRedIsValid = isValidWithoutDecantage && Boolean(decantage);
  const conclusionIsValid = color === "red" ? conclusionRedIsValid : isValidWithoutDecantage;

  const isCheckPanel = currentStepIndex === 5;

  return {
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
  };
}
