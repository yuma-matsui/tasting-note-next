import { useFormLabels } from "@/hooks";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

import FormTitle from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormTitle";
import OptionInput from "@/app/(WithHeader)/tasting_sheets/new/_components/form/OptionInput";
import SectionWrapper from "@/app/(WithHeader)/tasting_sheets/new/_components/form/SectionWrapper";

export default function FlavorForm({
  register,
  watch,
}: {
  register: UseFormRegister<TastingSheetType>;
  watch: UseFormWatch<TastingSheetType>;
}) {
  const {
    color,
    flavor: { flavorFirstImpressions, flavorFlowers, flavorFruits, flavorImpressions, flavorSpices },
  } = watch();
  const {
    flavorFirstImpressions: flFirstImpressions,
    flavorFlowers: flFlowers,
    flavorFruits: flFruits,
    flavorImpressions: flImpressions,
    flavorSpices: flSpices,
  } = useFormLabels(color);

  return (
    <>
      <FormTitle title="香り" />
      <SectionWrapper title="第一印象" subTitle="強さ / 性質" required>
        {flFirstImpressions.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="flavor.flavorFirstImpressions"
            value={label}
            checkbox
            disabled={flavorFirstImpressions.length === 2 && !flavorFirstImpressions.includes(label)}
            checked={flavorFirstImpressions.includes(label)}
          />
        ))}
      </SectionWrapper>
      <SectionWrapper title="果実" subTitle="熟成度 低 → 高" required>
        {flFruits.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="flavor.flavorFruits"
            value={label}
            checkbox
            disabled={flavorFruits.length === 2 && !flavorFruits.includes(label)}
            checked={flavorFruits.includes(label)}
          />
        ))}
      </SectionWrapper>
      <SectionWrapper title="花・植物" subTitle="花 / 植物 /ドライ / 菌類" required>
        {flFlowers.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="flavor.flavorFlowers"
            value={label}
            checkbox
            disabled={flavorFlowers.length === 2 && !flavorFlowers.includes(label)}
            checked={flavorFlowers.includes(label)}
          />
        ))}
      </SectionWrapper>
      <SectionWrapper title="香辛料・芳香・化学物質" subTitle="香辛料 / 樽 / 動物 / 他" required>
        {flSpices.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="flavor.flavorSpices"
            value={label}
            checkbox
            disabled={flavorSpices.length === 2 && !flavorSpices.includes(label)}
            checked={flavorSpices.includes(label)}
          />
        ))}
      </SectionWrapper>
      <SectionWrapper title="香りの印象" subTitle="熟成感 / 特性" required>
        {flImpressions.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="flavor.flavorImpressions"
            value={label}
            checkbox
            disabled={flavorImpressions.length === 2 && !flavorImpressions.includes(label)}
            checked={flavorImpressions.includes(label)}
          />
        ))}
      </SectionWrapper>
    </>
  );
}
