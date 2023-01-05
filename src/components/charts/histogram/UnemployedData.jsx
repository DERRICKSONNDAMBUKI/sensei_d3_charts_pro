import { csv } from "d3";
import { useEffect, useState } from "react";
import csvUrl from "../../../data/unemployment.csv";

export const UnemployedData = () => {
  const [unemployed, setUnemployed] = useState(null);

  useEffect(() => {
    csv(csvUrl).then((unemployed) => setUnemployed(unemployed));
  }, []);

  return unemployed;
};
