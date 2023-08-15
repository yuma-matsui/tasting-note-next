import appearance from "@/assets/images/appearance.jpg";
import conclusion from "@/assets/images/conclusion.jpg";
import flavor from "@/assets/images/flavor.jpg";
import taste from "@/assets/images/taste.jpg";

import DemoImage from "@/app/_components/DemoImage";

export default function DemoImagesSection() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <DemoImage text="外観" src={appearance} alt="appearance-sheet" />
      <DemoImage text="香り" src={flavor} alt="flavor-sheet" />
      <DemoImage text="味わい" src={taste} alt="taste-sheet" />
      <DemoImage text="まとめ" src={conclusion} alt="conclusion-sheet" />
    </div>
  );
}
