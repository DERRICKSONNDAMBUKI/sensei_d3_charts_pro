import React from "react";
import { AlphabetData } from "../../components/charts/bar/AlphabetData";
import { Bar } from "../../components/charts/bar/Bar";

export const AlphabetBar = () => {
  const alphabets = AlphabetData();

  if (!alphabets) return <pre>Please wait. alphabets loading...</pre>;

  return <Bar alphabets={alphabets} />;
};
