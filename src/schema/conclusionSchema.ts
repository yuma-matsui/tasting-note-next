import { COUNTRIES, DECANTAGES, EVALUATIONS, GLASSES, GRAPES, OPTIMUM_TEMPERATURES } from "@/assets/labels";
import { enumType, nullable, object, string } from "valibot";

const countrySchema = enumType(COUNTRIES, "1つ選択してください");

const decantageSchema = enumType(DECANTAGES, "1つ選択してください");

const evaluationSchema = enumType(EVALUATIONS, "1つ選択してください");

const glassSchema = enumType(GLASSES, "1つ選択してください");

const grapeSchema = enumType(GRAPES, "1つ選択してください");

const optimumTemperatureSchema = enumType(OPTIMUM_TEMPERATURES, "1つ選択してください");

const conclusionSchema = object({
  country: countrySchema,
  decantage: nullable(decantageSchema),
  evaluation: evaluationSchema,
  glass: glassSchema,
  grape: grapeSchema,
  optimumTemperature: optimumTemperatureSchema,
  vintage: string(),
});

export default conclusionSchema;
