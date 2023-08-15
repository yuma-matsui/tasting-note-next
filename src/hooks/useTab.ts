import { useState } from "react";

export default function useTab() {
  const TYPES = ["appearance", "flavor", "taste", "conclusion"] as const;
  const [selectedTab, setSelectedTab] = useState<(typeof TYPES)[number]>("appearance");
  const changeTab = (type: (typeof TYPES)[number]) => setSelectedTab(type);
  const selected = (type: (typeof TYPES)[number]) => selectedTab === type;

  const formatTabName = (type: (typeof TYPES)[number]) => {
    switch (type) {
      case "appearance":
        return "外観";
      case "flavor":
        return "香り";
      case "taste":
        return "味わい";
      case "conclusion":
        return "まとめ";
    }
  };

  return {
    changeTab,
    formatTabName,
    selected,
    types: TYPES,
  };
}
