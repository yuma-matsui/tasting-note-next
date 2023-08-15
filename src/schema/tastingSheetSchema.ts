import { TASTING_TIMES, WINE_COLORS } from "@/assets/labels";
import appearanceSchema from "@/schema/appearanceSchema";
import conclusionSchema from "@/schema/conclusionSchema";
import flavorSchema from "@/schema/flavorSchema";
import tasteSchema from "@/schema/tasteSchema";
import { enumType, maxLength, minLength, object, Output, string, StringSchema } from "valibot";

const timeSchema = enumType(TASTING_TIMES, "記録時間を選択してください");

const colorSchema = enumType(WINE_COLORS, "色を選択してください");

const nameSchema: StringSchema<string> = string([
  minLength(1, "入力必須です"),
  maxLength(255, "255文字以内で入力してください"),
]);

export const tastingSheetSchema = object({
  name: nameSchema,
  appearance: appearanceSchema,
  color: colorSchema,
  conclusion: conclusionSchema,
  flavor: flavorSchema,
  taste: tasteSchema,
  time: timeSchema,
});

export type TastingSheetType = Output<typeof tastingSheetSchema>;
