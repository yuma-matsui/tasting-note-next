import DemoImage from "@/app/_components/DemoImage";
import appearance from "@/app/assets/images/appearance.jpg";
import conclusion from "@/app/assets/images/conclusion.jpg";
import flavor from "@/app/assets/images/flavor.jpg";
import taste from "@/app/assets/images/taste.jpg";

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
