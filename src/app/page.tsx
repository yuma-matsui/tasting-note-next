import type { Metadata } from "next";

import { BaseButton } from "@/components";

import {
  AboutSection,
  DemoImagesSection,
  GoogleSignInLink,
  TopTitle,
  WithRegistrationSection,
} from "@/app/_components";

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
        <div className="mx-auto mb-6 flex justify-between sm:w-96">
          <BaseButton stylePayload={{ color: "red", size: "md" }} linkProps={{ href: "/tasting_sheets/new" }}>
            すぐにはじめる
          </BaseButton>
          <GoogleSignInLink />
        </div>
      </div>
    </div>
  );
}
