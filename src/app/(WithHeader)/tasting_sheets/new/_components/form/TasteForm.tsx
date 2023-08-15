import { useFormLabels } from "@/hooks";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { isRed } from "@/utils";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

import FormTitle from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormTitle";
import OptionInput from "@/app/(WithHeader)/tasting_sheets/new/_components/form/OptionInput";
import SectionWrapper from "@/app/(WithHeader)/tasting_sheets/new/_components/form/SectionWrapper";

export default function TasteForm({
  register,
  watch,
}: {
  register: UseFormRegister<TastingSheetType>;
  watch: UseFormWatch<TastingSheetType>;
}) {
  const { color, taste } = watch();
  const { acidities, afterTastes, alcohols, astringents, attacks, balances, bitterness, sweetness } =
    useFormLabels(color);
  return (
    <>
      <FormTitle title="味わい" />
      <SectionWrapper title="アタック">
        {attacks.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="taste.attack"
            value={label}
            checked={taste.attack === label}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="甘み" subTitle="(アルコールのボリューム感も含む)">
        {sweetness.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="taste.sweetness"
            value={label}
            checked={taste.sweetness === label}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="酸味" subTitle="弱 → 強">
        {acidities.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="taste.acidity"
            value={label}
            checked={taste.acidity === label}
          />
        ))}
      </SectionWrapper>

      {isRed(color) ? (
        <SectionWrapper title="タンニン分">
          {astringents.map((label) => (
            <OptionInput
              key={label}
              color={color}
              register={register}
              name="taste.astringent"
              value={label}
              checked={taste.astringent === label}
            />
          ))}
        </SectionWrapper>
      ) : (
        <SectionWrapper title="苦味">
          {bitterness.map((label) => (
            <OptionInput
              key={label}
              color={color}
              register={register}
              name="taste.bitterness"
              value={label}
              checked={taste.bitterness === label}
            />
          ))}
        </SectionWrapper>
      )}

      <SectionWrapper title="バランス" subTitle="左上 / 右上 / 下">
        {balances.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="taste.balance"
            value={label}
            checked={taste.balance === label}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="アルコール">
        {alcohols.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="taste.alcohol"
            value={label}
            checked={taste.alcohol === label}
          />
        ))}
      </SectionWrapper>

      <SectionWrapper title="余韻">
        {afterTastes.map((label) => (
          <OptionInput
            key={label}
            color={color}
            register={register}
            name="taste.afterTaste"
            value={label}
            checked={taste.afterTaste === label}
          />
        ))}
      </SectionWrapper>
    </>
  );
}
