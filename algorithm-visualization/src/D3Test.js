import * as d3 from "d3";
import { useEffect } from "react";

export default function D3Test() {
  useEffect(() => {
    const matrix = [1, 2, 3, 4];

    const svg = d3
      .select("div")
      .append("svg")
      .attr("width", 500)
      .attr("height", 500)
      .attr("class", "bg-slate-900");

    svg
      .selectAll("rect")
      .data(matrix)
      .join("rect")
      .attr("x", (d, i) => i * 60)
      .attr("y", (d) => 500 - d * 50)
      .attr("width", 30)
      .attr("height", (d) => d * 50)
      .attr("fill", "steelblue");
  }, []);
  return <div id="svg"></div>;
}
