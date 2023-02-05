import { axisBottom, axisLeft, max, scaleBand, scaleLinear, select } from "d3";
import React, { useRef } from "react";

export const Bar = ({ alphabets }) => {
  // chart
  //   console.log(alphabets);
  const ref = useRef();

  var width = 500; // rick has bugs - no size scaling
  var height = 200;

  const margin = { top: 20, right: 0, bottom: 30, left: 40 };

  const x = scaleBand()
    .domain(alphabets.map((d) => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const y = scaleLinear()
    .domain([0, max(alphabets, (d) => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const xAxis = (g) =>
    g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(axisBottom(x).tickSizeOuter(0));

  const yAxis = (g) =>
    g
      .attr("transform", `translate(${margin.left},0)`)
      .call(axisLeft(y))
      .call((g) => g.select(".domain").remove());

  //   svg
  const svg = select(ref.current);

  //   zoom
  const zoom = async (svg) => { // ricky has bugs
    const extent = [
      [margin.left, margin.top],
      [width - margin.right, height - margin.top],
    ];

    svg.call(
     zoom()
        .scaleExtent([1, 8])
        .translateExtent(extent)
        .extent(extent)
        .on("zoom", zoomed)
    );

    function zoomed(event) {
      x.range(
        [margin.left, width - margin.right].map((d) =>
          event.transform.applyX(d)
        )
      );
      svg
        .selectAll(".bars rect")
        .attr("x", (d) => x(d.name))
        .attr("width", x.bandwidth());
      svg.selectAll(".x-axis").call(xAxis);
    }
  };

  svg.attr("viewBox", [0, 0, width, height]).call(zoom);

  svg
    .append("g")
    .attr("class", "bars")
    .attr("fill", "steelblue")
    .selectAll("rect")
    .data(alphabets)
    .join("rect")
    .attr("x", (d) => x(d.name))
    .attr("y", (d) => y(d.value))
    .attr("height", (d) => y(0) - y(d.value))
    .attr("width", x.bandwidth());

  svg.append("g").attr("class", "x-axis").call(xAxis);

  svg.append("g").attr("class", "y-axis").call(yAxis);

  return <svg ref={ref}></svg>;
};
