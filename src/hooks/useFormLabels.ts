import {
  APPEARANCE_COLORS_RED,
  APPEARANCE_COLORS_WHITE,
  APPEARANCE_IMPRESSIONS_RED,
  APPEARANCE_IMPRESSIONS_WHITE,
  BRIGHTNESSES_RED,
  BRIGHTNESSES_WHITE,
  CLARITIES_RED,
  CLARITIES_WHITE,
  CONSISTENCIES,
  INTENSITIES_RED,
  INTENSITIES_WHITE,
} from "@/assets/labels";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { isRed } from "@/utils";

export default function useFormLabels(color: TastingSheetType["color"]) {
  return {
    appearanceColors: isRed(color) ? APPEARANCE_COLORS_RED : APPEARANCE_COLORS_WHITE,
    appearanceImpressions: isRed(color) ? APPEARANCE_IMPRESSIONS_RED : APPEARANCE_IMPRESSIONS_WHITE,
    brightnesses: isRed(color) ? BRIGHTNESSES_RED : BRIGHTNESSES_WHITE,
    clarities: isRed(color) ? CLARITIES_RED : CLARITIES_WHITE,
    consistencies: CONSISTENCIES,
    intensities: isRed(color) ? INTENSITIES_RED : INTENSITIES_WHITE,
  };
}
