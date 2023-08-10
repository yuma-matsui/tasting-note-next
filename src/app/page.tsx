import type { Metadata } from "next";

import { AboutSection, DemoImagesSection, TopTitle, WithRegistrationSection } from "@/app/_components";

export const metadata: Metadata = {
  title: "Tasting Note",
  description: "J.S.Aソムリエ呼称資格認定試験2次試験対策用サービス",
};

export default function WelcomePage() {
  return (
    <div>
      <TopTitle />
      <div className="space-y-5">
        <AboutSection />
        <DemoImagesSection />
        <WithRegistrationSection />
      </div>
    </div>
  );
}
