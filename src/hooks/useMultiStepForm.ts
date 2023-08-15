import { ReactElement, useCallback, useState } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) return index;
      return index + 1;
    });
  }, [steps]);

  const back = useCallback(() => {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  }, []);

  return {
    back,
    currentStepIndex,
    next,
    step: steps[currentStepIndex],
    steps,
  };
}
