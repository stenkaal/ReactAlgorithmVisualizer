import * as d3 from "d3";
import { useEffect } from "react";

export default function D3Test() {
  useEffect(() => {
    const matrix = [50, 100, 150, 200];

    const svg = d3
      .select("div")
      .append("svg")
      .attr("width", 850)
      .attr("height", 510)
      .attr("class", "bg-slate-900");

    svg
      .selectAll("rect")
      .data(matrix)
      .join("rect")
      .attr("x", (d, i) => i * 40)
      .attr("y", (d) => 490 - d)
      .attr("width", 30)
      .attr("height", (d) => d)
      .attr("fill", "steelblue");

    svg
      .selectAll("text")
      .data(matrix)
      .join("text")
      .attr("x", (d, i) => i * 40 + 15)
      .attr("y", 490 + 15)
      .attr("textAnchor", "middle")
      .attr("fontSize", 12)
      .attr("fill", "white")
      .text((d) => d);
    return () => {
      svg.remove();
    };
  }, []);
  return <div id="svg"></div>;
}
