import {
  ACIDITIES_RED,
  ACIDITIES_WHITE,
  AFTER_TASTES,
  ALCOHOLS,
  APPEARANCE_COLORS_RED,
  APPEARANCE_COLORS_WHITE,
  APPEARANCE_IMPRESSIONS_RED,
  APPEARANCE_IMPRESSIONS_WHITE,
  ASTRINGENTS,
  ATTACKS,
  BALANCES_RED,
  BALANCES_WHITE,
  BITTERNESS,
  BRIGHTNESSES_RED,
  BRIGHTNESSES_WHITE,
  CLARITIES_RED,
  CLARITIES_WHITE,
  CONSISTENCIES,
  COUNTRIES,
  DECANTAGES,
  EVALUATIONS_RED,
  EVALUATIONS_WHITE,
  FLAVOR_FIRST_IMPRESSIONS_RED,
  FLAVOR_FIRST_IMPRESSIONS_WHITE,
  FLAVOR_FLOWERS_RED,
  FLAVOR_FLOWERS_WHITE,
  FLAVOR_FRUITS_RED,
  FLAVOR_FRUITS_WHITE,
  FLAVOR_IMPRESSIONS_RED,
  FLAVOR_IMPRESSIONS_WHITE,
  FLAVOR_SPICES_RED,
  FLAVOR_SPICES_WHITE,
  GLASSES,
  GRAPES_RED,
  GRAPES_WHITE,
  INTENSITIES_RED,
  INTENSITIES_WHITE,
  OPTIMUM_TEMPERATURES_RED,
  OPTIMUM_TEMPERATURES_WHITE,
  SWEETNESS,
  VINTAGES,
} from "@/assets/labels";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { isRed } from "@/utils";

export default function useFormLabels(color: TastingSheetType["color"]) {
  return {
    acidities: isRed(color) ? ACIDITIES_RED : ACIDITIES_WHITE,
    afterTastes: AFTER_TASTES,
    alcohols: ALCOHOLS,
    appearanceColors: isRed(color) ? APPEARANCE_COLORS_RED : APPEARANCE_COLORS_WHITE,
    appearanceImpressions: isRed(color) ? APPEARANCE_IMPRESSIONS_RED : APPEARANCE_IMPRESSIONS_WHITE,
    astringents: ASTRINGENTS,
    attacks: ATTACKS,
    balances: isRed(color) ? BALANCES_RED : BALANCES_WHITE,
    bitterness: BITTERNESS,
    brightnesses: isRed(color) ? BRIGHTNESSES_RED : BRIGHTNESSES_WHITE,
    clarities: isRed(color) ? CLARITIES_RED : CLARITIES_WHITE,
    consistencies: CONSISTENCIES,
    countries: COUNTRIES,
    decantages: DECANTAGES,
    evaluations: isRed(color) ? EVALUATIONS_RED : EVALUATIONS_WHITE,
    flavorFirstImpressions: isRed(color) ? FLAVOR_FIRST_IMPRESSIONS_RED : FLAVOR_FIRST_IMPRESSIONS_WHITE,
    flavorFlowers: isRed(color) ? FLAVOR_FLOWERS_RED : FLAVOR_FLOWERS_WHITE,
    flavorFruits: isRed(color) ? FLAVOR_FRUITS_RED : FLAVOR_FRUITS_WHITE,
    flavorImpressions: isRed(color) ? FLAVOR_IMPRESSIONS_RED : FLAVOR_IMPRESSIONS_WHITE,
    flavorSpices: isRed(color) ? FLAVOR_SPICES_RED : FLAVOR_SPICES_WHITE,
    glasses: GLASSES,
    grapes: isRed(color) ? GRAPES_RED : GRAPES_WHITE,
    intensities: isRed(color) ? INTENSITIES_RED : INTENSITIES_WHITE,
    optimumTemperatures: isRed(color) ? OPTIMUM_TEMPERATURES_RED : OPTIMUM_TEMPERATURES_WHITE,
    sweetness: SWEETNESS,
    vintages: VINTAGES,
  };
}
