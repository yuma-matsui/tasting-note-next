import { Metadata } from "next";

import TastingSheetForm from "@/app/(WithHeader)/tasting_sheets/new/_components/form/TastingSheetForm";

export const metadata: Metadata = {
  title: "テイスティングの記録",
  description: "ワインテイスティングの記録が行えます",
};

export default function NewTastingSheetPage() {
  return <TastingSheetForm />;
}
