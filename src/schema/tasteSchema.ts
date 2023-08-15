import {
  ACIDITIES,
  AFTER_TASTES,
  ALCOHOLS,
  ASTRINGENTS,
  ATTACKS,
  BALANCES,
  BITTERNESS,
  SWEETNESS,
} from "@/assets/labels";
import { enumType, nullable, object } from "valibot";

const aciditySchema = enumType(ACIDITIES, "1つ選択してください");

const astringentSchema = enumType(ASTRINGENTS, "1つ選択してください");

const balanceSchema = enumType(BALANCES, "1つ選択してください");

const afterTasteSchema = enumType(AFTER_TASTES, "1つ選択してください");

const alcoholSchema = enumType(ALCOHOLS, "1つ選択してください");

const attackSchema = enumType(ATTACKS, "1つ選択してください");

const sweetnessSchema = enumType(SWEETNESS, "1つ選択してください");

const bitternessSchema = enumType(BITTERNESS, "1つ選択してください");

const tasteSchema = object({
  acidity: aciditySchema,
  afterTaste: afterTasteSchema,
  alcohol: alcoholSchema,
  astringent: nullable(astringentSchema),
  attack: attackSchema,
  balance: balanceSchema,
  bitterness: nullable(bitternessSchema),
  sweetness: sweetnessSchema,
});

export default tasteSchema;
