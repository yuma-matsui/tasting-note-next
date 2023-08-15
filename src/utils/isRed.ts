import { TastingSheetType } from "@/schema/tastingSheetSchema";

export default function isRed(color: TastingSheetType["color"]) {
  return color === "red";
}
