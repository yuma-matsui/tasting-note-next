import { TASTING_TIMES, WINE_COLORS } from "@/assets/labels";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

import FormTitle from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormTitle";
import OptionInput from "@/app/(WithHeader)/tasting_sheets/new/_components/form/OptionInput";
import SectionWrapper from "@/app/(WithHeader)/tasting_sheets/new/_components/form/SectionWrapper";
import SelectBox from "@/app/(WithHeader)/tasting_sheets/new/_components/form/SelectBox";

export default function SettingForm({
  error,
  register,
  watch,
}: {
  error: FieldErrors<TastingSheetType>;
  register: UseFormRegister<TastingSheetType>;
  watch: UseFormWatch<TastingSheetType>;
}) {
  const { color: currentColor } = watch();
  return (
    <>
      <FormTitle title="テイスティングシートの設定" />
      <SectionWrapper title="シート名">
        <div className="form-control m-2 w-full max-w-xs">
          <input
            type="text"
            {...register("name")}
            className="
                input-bordered
                input
                h-8
                border-gray-700
              "
          />
          {error.name && <span className="m-1 text-theme-red">{error.name.message}</span>}
        </div>
      </SectionWrapper>

      <SectionWrapper title="テイスティング時間（分）">
        <SelectBox register={register} name="time" options={[...TASTING_TIMES]} />
      </SectionWrapper>

      <SectionWrapper title="ワインの色">
        {WINE_COLORS.map((color) => (
          <OptionInput
            key={color}
            color={color}
            register={register}
            name="color"
            value={color}
            checked={currentColor === color}
          />
        ))}
      </SectionWrapper>
    </>
  );
}
