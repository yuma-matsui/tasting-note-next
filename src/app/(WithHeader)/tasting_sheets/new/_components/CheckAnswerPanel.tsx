import { useTab } from "@/hooks";
import { TastingSheetType } from "@/schema/tastingSheetSchema";
import { UseFormWatch } from "react-hook-form";
import { tv } from "tailwind-variants";

import FormTitle from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormTitle";

const LABELS = [
  {
    headings: [
      { name: "appearance.clarity", title: "清澄度" },
      { name: "appearance.brightness", title: "輝き" },
      { name: "appearance.appearanceColors", title: "色調" },
      { name: "appearance.intensity", title: "濃淡" },
      { name: "appearance.consistency", title: "粘性" },
      { name: "appearance.appearanceImpressions", title: "外観の印象" },
    ],
    type: "appearance",
  },
  {
    headings: [
      { name: "flavor.flavorFirstImpressions", title: "第一印象" },
      { name: "flavor.flavorFruits", title: "果実" },
      { name: "flavor.flavorFlowers", title: "花・植物" },
      { name: "flavor.flavorSpices", title: "香辛料・芳香・化学物質" },
      { name: "flavor.flavorImpressions", title: "香りの印象" },
    ],
    type: "flavor",
  },
  {
    headings: [
      { name: "taste.attack", title: "アタック" },
      { name: "taste.sweetness", title: "甘み" },
      { name: "taste.acidity", title: "酸味" },
      { name: "taste.astringent", title: "タンニン分" },
      { name: "taste.bitterness", title: "苦味" },
      { name: "taste.balance", title: "バランス" },
      { name: "taste.alcohol", title: "アルコール" },
      { name: "taste.afterTaste", title: "余韻" },
    ],
    type: "taste",
  },
  {
    headings: [
      { name: "conclusion.evaluation", title: "評価" },
      { name: "conclusion.optimumTemperature", title: "適正温度" },
      { name: "conclusion.glass", title: "グラス" },
      { name: "conclusion.decantage", title: "デカンタージュ" },
      { name: "conclusion.vintage", title: "収穫年" },
      { name: "conclusion.country", title: "生産国" },
      { name: "conclusion.grape", title: "ぶどう品種" },
    ],
    type: "conclusion",
  },
] as const;

const formatAnswer = (answer: string | null | string[]) => {
  return answer instanceof Array ? answer.join("、") : answer;
};

const tabButton = tv({
  base: "tab",
  variants: {
    color: {
      red: "tab-error",
      white: "tab-success",
    },
    selected: {
      true: "tab-active",
    },
  },
});

export default function CheckAnswerPanel({ watch }: { watch: UseFormWatch<TastingSheetType> }) {
  const { color } = watch();
  const { changeTab, formatTabName, selected, types } = useTab();

  return (
    <>
      <FormTitle title="あなたの回答" />
      <div className="tabs tabs-boxed mt-4 flex w-full justify-between">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => changeTab(type)}
            className={tabButton({ color, selected: selected(type) })}
          >
            {formatTabName(type)}
          </button>
        ))}
      </div>

      <div className="my-6 w-full border-2 border-black">
        {LABELS.filter((label) => selected(label.type)).map((label) => (
          <dl key={label.type}>
            {label.headings.map((heading) => {
              return watch(heading.name) ? (
                <>
                  <dt className="box-content border-y border-gray-400 bg-gray-300 p-2">
                    <span className="text-base font-bold">{heading.title}</span>
                  </dt>
                  {<dd className="break-words p-2">{formatAnswer(watch(heading.name))}</dd>}
                </>
              ) : null;
            })}
          </dl>
        ))}
      </div>
    </>
  );
}
