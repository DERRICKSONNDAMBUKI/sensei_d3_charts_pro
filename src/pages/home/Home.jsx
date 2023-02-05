import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Home D3 Charts</h1>
      <ul>
        <li>
          <Link to={"/worldmappoints"}>
            World Map with cities' population points
          </Link>
        </li>
        <li><Link to={"unemployment"}>Histogram with unemployment</Link></li>
        <li><Link to={"barchart"}>Bar Chart</Link></li>
      </ul>
    </>
  );
};
