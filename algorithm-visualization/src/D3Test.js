import * as d3 from "d3";
import { useEffect } from "react";

export default function D3Test() {
  useEffect(() => {
    const matrix = [100, 200, 300, 400];

    const svg = d3
      .select("#svg")
      .append("svg")
      .attr("viewBox", "0 0 850 510")
      .attr("perserveApectRatio", "xMidyMid meet");

    svg
      .selectAll("rect")
      .data(matrix)
      .join("rect")
      .attr("x", (d, i) => i * 100 + 220)
      .attr("y", 490)
      .attr("width", 30)
      .attr("fill", "steelblue")
      .transition()
      .delay((d, i) => i * 200)
      .duration(800)
      .ease(d3.easeCubic)
      .attr("y", (d) => 490 - d)
      .attr("height", (d) => d);

    svg
      .selectAll("text")
      .data(matrix)
      .join("text")
      .attr("x", (d, i) => i * 100 + 220)
      .attr("y", 490 + 15)
      .attr("textAnchor", "middle")
      .attr("fontSize", 12)
      .attr("fill", "white")
      .text((d) => d);
    return () => {
      svg.remove();
    };
  }, []);
  return (
    <div className="grid grid-cols-5">
      <h2 className="text-4xl font-bold mb-4 col-start-3 col-span-1">
        Testing
      </h2>
      <div
        id="svg"
        className="w-full h-auto bg-slate-900 col-start-2 col-span-3"
      ></div>
    </div>
  );
}
