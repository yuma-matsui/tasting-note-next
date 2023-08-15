import { useFormLabels } from "@/hooks";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { isRed } from "@/utils";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

import FormTitle from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormTitle";
import OptionInput from "@/app/(WithHeader)/tasting_sheets/new/_components/form/OptionInput";
import SectionWrapper from "@/app/(WithHeader)/tasting_sheets/new/_components/form/SectionWrapper";
import SelectBox from "@/app/(WithHeader)/tasting_sheets/new/_components/form/SelectBox";

export default function ConclusionForm({
  register,
  watch,
}: {
  register: UseFormRegister<TastingSheetType>;
  watch: UseFormWatch<TastingSheetType>;
}) {
  const { color, conclusion } = watch();
  const { countries, decantages, evaluations, glasses, grapes, optimumTemperatures, vintages } = useFormLabels(color);
  return (
    <>
      <FormTitle title="まとめ" />
      <SectionWrapper title="評価" subTitle="軽 → 重">
        {evaluations.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="conclusion.evaluation"
            value={label}
            checked={conclusion.evaluation === label}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="適正温度">
        {optimumTemperatures.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="conclusion.optimumTemperature"
            value={label}
            checked={conclusion.optimumTemperature === label}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="グラス">
        {glasses.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="conclusion.glass"
            value={label}
            checked={conclusion.glass === label}
          />
        ))}
      </SectionWrapper>

      {isRed(color) && (
        <SectionWrapper title="デカンタージュ">
          {decantages.map((label) => (
            <OptionInput
              key={label}
              color="red"
              register={register}
              name="conclusion.decantage"
              value={label}
              checked={conclusion.decantage === label}
            />
          ))}
        </SectionWrapper>
      )}

      <SectionWrapper title="収穫年">
        <SelectBox register={register} name="conclusion.vintage" options={vintages} />
      </SectionWrapper>

      <SectionWrapper title="生産国">
        <SelectBox register={register} name="conclusion.country" options={[...countries]} />
      </SectionWrapper>

      <SectionWrapper title="ぶどう品種">
        <SelectBox register={register} name="conclusion.grape" options={[...grapes]} />
      </SectionWrapper>
    </>
  );
}
