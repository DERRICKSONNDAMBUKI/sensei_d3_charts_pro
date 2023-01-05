import React from "react";
import { HistogramComp } from "../../components/charts/histogram/HistogramComp";
import { UnemployedData } from "../../components/charts/histogram/UnemployedData";

export const Unemployment = () => {
  const unemployed = UnemployedData();

  if (!unemployed) return <pre>Please wait. Cities Loading...</pre>;

  return <HistogramComp unemployed={unemployed} />;
};
