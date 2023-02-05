import { csv } from "d3";
import { useEffect, useState } from "react";
import csvUrl from '../../../data/Alphabet data.csv'

export const AlphabetData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
   csv(csvUrl).then(setData)
  }, [])

  return data;
};
