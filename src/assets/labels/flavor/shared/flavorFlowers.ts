import FLAVOR_FLOWERS_RED from "@/assets/labels/flavor/red/flavorFlowersRed";
import FLAVOR_FLOWERS_WHITE from "@/assets/labels/flavor/white/flavorFlowersWhite";

export default [...FLAVOR_FLOWERS_RED, ...FLAVOR_FLOWERS_WHITE] as const;
