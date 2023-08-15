"use client";

import { useMultiStepForm } from "@/hooks";
import { tastingSheetSchema, TastingSheetType } from "@/schema/tastingSheetSchema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { SubmitHandler, useForm } from "react-hook-form";

import CheckAnswerPanel from "@/app/(WithHeader)/tasting_sheets/new/_components/CheckAnswerPanel";
import AppearanceForm from "@/app/(WithHeader)/tasting_sheets/new/_components/form/AppearanceForm";
import ConclusionForm from "@/app/(WithHeader)/tasting_sheets/new/_components/form/ConclusionForm";
import FlavorForm from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FlavorForm";
import FormController from "@/app/(WithHeader)/tasting_sheets/new/_components/form/FormController";
import SettingForm from "@/app/(WithHeader)/tasting_sheets/new/_components/form/SettingForm";
import TasteForm from "@/app/(WithHeader)/tasting_sheets/new/_components/form/TasteForm";

export default function TastingSheetForm() {
  const handleOnSubmit: SubmitHandler<TastingSheetType> = (data) => {
    console.log(data);
  };

  const {
    formState: { errors: formatError, isSubmitting, isValid },
    handleSubmit,
    register,
    watch,
  } = useForm<TastingSheetType>({
    defaultValues: {
      appearance: {
        appearanceColors: [],
        appearanceImpressions: [],
      },
      conclusion: {
        decantage: null,
      },
      flavor: {
        flavorFirstImpressions: [],
        flavorFlowers: [],
        flavorFruits: [],
        flavorImpressions: [],
        flavorSpices: [],
      },
      taste: {
        astringent: null,
        bitterness: null,
      },
    },
    mode: "onChange",
    resolver: valibotResolver(tastingSheetSchema),
  });
  const valid = !isSubmitting || isValid;

  const { back, currentStepIndex, next, step } = useMultiStepForm([
    <SettingForm error={formatError} register={register} watch={watch} key={0} />,
    <AppearanceForm register={register} watch={watch} key={1} />,
    <FlavorForm register={register} watch={watch} key={2} />,
    <TasteForm register={register} watch={watch} key={3} />,
    <ConclusionForm register={register} watch={watch} key={4} />,
    <CheckAnswerPanel watch={watch} key={5} />,
  ]);

  return (
    <FormController currentStepIndex={currentStepIndex} back={back} next={next} watch={watch} isSubmitValid={valid}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="flex flex-col items-center space-y-5">
        {step}
      </form>
    </FormController>
  );
}
