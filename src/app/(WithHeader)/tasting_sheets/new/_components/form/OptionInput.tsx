import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { FieldPath, UseFormRegister } from "react-hook-form";
import { tv } from "tailwind-variants";

const optionInput = tv({
  compoundVariants: [
    {
      checkbox: true,
      class: {
        input: "checkbox-error",
      },
      color: "red",
    },
    {
      checkbox: true,
      class: {
        input: "checkbox-success",
      },
      color: "white",
    },
    {
      checkbox: false,
      class: {
        input: "radio-error",
      },
      color: "red",
    },
    {
      checkbox: false,
      class: {
        input: "radio-success",
      },
      color: "white",
    },
    {
      checked: true,
      class: {
        label: "bg-light-red",
      },
      color: "red",
    },
    {
      checked: true,
      class: {
        label: "bg-light-green",
      },
      color: "white",
    },
  ],
  slots: {
    input: "",
    label: "label cursor-pointer justify-start w-1/2 border-b border-r p-4",
    text: "label-text ml-2 text-base",
  },
  variants: {
    checkbox: {
      false: {
        input: "radio radio-sm",
      },
      true: {
        input: "checkbox checkbox-sm",
      },
    },
    checked: {
      false: {},
      true: {},
    },
    color: {
      red: {},
      white: {},
    },
  },
});

export default function OptionInput({
  name,
  checkbox = false,
  checked,
  color,
  disabled = false,
  register,
  value,
}: {
  name: FieldPath<TastingSheetType>;
  checkbox?: boolean;
  checked: boolean;
  color: TastingSheetType["color"];
  disabled?: boolean;
  register: UseFormRegister<TastingSheetType>;
  value: string;
}) {
  const { input, label, text } = optionInput({ checkbox, checked, color });
  return (
    <label className={label()}>
      <input
        className={input()}
        type={checkbox ? "checkbox" : "radio"}
        {...register(name)}
        value={value}
        disabled={disabled}
      />
      <span className={text()}>{value}</span>
    </label>
  );
}
