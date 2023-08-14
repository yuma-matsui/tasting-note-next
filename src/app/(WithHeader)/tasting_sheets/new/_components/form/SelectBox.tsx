import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { FieldPath, UseFormRegister } from "react-hook-form";

export default function SelectBox({
  name,
  options,
  register,
}: {
  name: FieldPath<TastingSheetType>;
  options: string[];
  register: UseFormRegister<TastingSheetType>;
}) {
  return (
    <select
      {...register(name)}
      className="
        select-bordered
        select
        select-sm
        m-2
        w-full
        max-w-xs
        border-black
      "
    >
      <option disabled>選択してください</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
