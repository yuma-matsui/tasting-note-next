import FLAVOR_SPICES_RED from "@/assets/labels/flavor/red/flavorSpicesRed";
import FLAVOR_SPICES_WHITE from "@/assets/labels/flavor/white/flavorSpicesWhite";

export default [...FLAVOR_SPICES_RED, ...FLAVOR_SPICES_WHITE] as const;
