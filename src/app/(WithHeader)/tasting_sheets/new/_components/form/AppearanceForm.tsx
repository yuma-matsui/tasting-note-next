import { useFormLabels } from "@/hooks";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

import FormTitle from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormTitle";
import OptionInput from "@/app/(WithHeader)/tasting_sheets/new/_components/form/OptionInput";

import SectionWrapper from "./SectionWrapper";

export default function AppearanceForm({
  register,
  watch,
}: {
  register: UseFormRegister<TastingSheetType>;
  watch: UseFormWatch<TastingSheetType>;
}) {
  const {
    appearance: { appearanceColors, appearanceImpressions, brightness, clarity, consistency, intensity },
    color,
  } = watch();
  const {
    appearanceColors: appColors,
    appearanceImpressions: appImpressions,
    brightnesses,
    clarities,
    consistencies,
    intensities,
  } = useFormLabels(color);

  return (
    <>
      <FormTitle title="外観" />
      <SectionWrapper title="清澄度">
        {clarities.map((label) => (
          <OptionInput
            key={label}
            name="appearance.clarity"
            value={label}
            checked={clarity === label}
            color={color}
            register={register}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="輝き">
        {brightnesses.map((label) => (
          <OptionInput
            key={label}
            color={color}
            name="appearance.brightness"
            value={label}
            checked={brightness === label}
            register={register}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="色調" subTitle="補助用語/メイン" required>
        {appColors.map((label) => (
          <OptionInput
            key={label}
            color={color}
            name="appearance.appearanceColors"
            value={label}
            checked={appearanceColors.includes(label)}
            register={register}
            disabled={appearanceColors.length === 2 && !appearanceColors.includes(label)}
            checkbox
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="濃淡">
        {intensities.map((label) => (
          <OptionInput
            key={label}
            color={color}
            name="appearance.intensity"
            value={label}
            checked={intensity === label}
            register={register}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="粘性">
        {consistencies.map((label) => (
          <OptionInput
            key={label}
            color={color}
            name="appearance.consistency"
            value={label}
            checked={consistency === label}
            register={register}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="外観の印象" subTitle="若さ/成熟度" required>
        {appImpressions.map((label) => (
          <OptionInput
            key={label}
            color={color}
            name="appearance.appearanceImpressions"
            value={label}
            checked={appearanceImpressions.includes(label)}
            register={register}
            disabled={appearanceImpressions.length === 2 && !appearanceImpressions.includes(label)}
            checkbox
          />
        ))}
      </SectionWrapper>
    </>
  );
}
