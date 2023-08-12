import { FLAVOR_FIRST_IMPRESSIONS, FLAVOR_FRUITS, FLAVOR_IMPRESSIONS, FLAVOR_SPICES } from "@/assets/labels";
import { enumType, object, tuple } from "valibot";

const flavorFirstImpressionsSchema = tuple(
  [enumType(FLAVOR_FIRST_IMPRESSIONS)],
  enumType(FLAVOR_FIRST_IMPRESSIONS),
  "2つ選択してください"
);

const flavorFlowersSchema = tuple([enumType(FLAVOR_FRUITS)], enumType(FLAVOR_FRUITS), "2つ選択してください");

const flavorFruitsSchema = tuple([enumType(FLAVOR_FRUITS)], enumType(FLAVOR_FRUITS), "2つ選択してください");

const flavorImpressionsSchema = tuple(
  [enumType(FLAVOR_IMPRESSIONS)],
  enumType(FLAVOR_IMPRESSIONS),
  "2つ選択してください"
);

const flavorSpicesSchema = tuple([enumType(FLAVOR_SPICES)], enumType(FLAVOR_SPICES), "2つ選択してください");

const flavorSchema = object({
  flavorFirstImpressions: flavorFirstImpressionsSchema,
  flavorFlowers: flavorFlowersSchema,
  flavorFruits: flavorFruitsSchema,
  flavorImpressions: flavorImpressionsSchema,
  flavorSpices: flavorSpicesSchema,
});

export default flavorSchema;
