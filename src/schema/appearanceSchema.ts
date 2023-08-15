import {
  APPEARANCE_COLORS,
  APPEARANCE_IMPRESSIONS,
  BRIGHTNESSES,
  CLARITIES,
  CONSISTENCIES,
  INTENSITIES,
} from "@/assets/labels";
import { enumType, object, tuple } from "valibot";

const brightnessSchema = enumType(BRIGHTNESSES, "1つ選択してください");
const claritySchema = enumType(CLARITIES, "1つ選択してください");
const intensitySchema = enumType(INTENSITIES, "1つ選択してください");
const consistencySchema = enumType(CONSISTENCIES, "1つ選択してください");
const appearanceColorsSchema = tuple([enumType(APPEARANCE_COLORS), enumType(APPEARANCE_COLORS)], "2つ選択してください");
const appearanceImpressionsSchema = tuple(
  [enumType(APPEARANCE_IMPRESSIONS), enumType(APPEARANCE_IMPRESSIONS)],
  "2つ選択してください"
);

const appearanceSchema = object({
  appearanceColors: appearanceColorsSchema,
  appearanceImpressions: appearanceImpressionsSchema,
  brightness: brightnessSchema,
  clarity: claritySchema,
  consistency: consistencySchema,
  intensity: intensitySchema,
});

export default appearanceSchema;
