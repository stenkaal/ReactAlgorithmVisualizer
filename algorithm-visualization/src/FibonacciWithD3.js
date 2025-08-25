import * as d3 from "d3";
import { useEffect, useState } from "react";

export default function FibonacciWithD3() {
  const [data, setFibonacci] = useState([]);
  const heightScale = 0.11;
  const svgHeight = 600;
  const xScale = 45;

  const generateFibonacci = () => {
    let fib = [0, 1];

    for (let i = 1; i < 19; i++) {
      fib.push(fib[i] + fib[i - 1]);
    }
    setFibonacci(fib);
    console.log(fib);
  };

  useEffect(() => {
    const svg = d3
      .select("#svg")
      .append("svg")
      .attr("viewBox", `0 0 900 ${svgHeight}`)
      .attr("perserveApectRatio", "xMidyMid meet");

    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => i * xScale)
      .attr("y", (d) => 570 - d * heightScale)
      .attr("width", 30)
      .attr("height", (d) => d * heightScale)
      .attr("fill", "steelblue");

    svg
      .selectAll("text")
      .data(data)
      .join("text")
      .attr("x", (d, i) => i * xScale)
      .attr("y", 580 + 15)
      .attr("textAnchor", "middle")
      .attr("fontSize", 12)
      .attr("fill", "white")
      .text((d) => d);
    return () => {
      svg.remove();
    };
  });

  return (
    <div className="grid grid-cols-5">
      <h2 className="text-4xl font-bold mb-4 col-start-3 col-span-1">
        Fibonacci
      </h2>
      <div
        id="svg"
        className="w-full h-auto bg-slate-900 col-start-2 col-span-3"
      ></div>
      <button
        className="bg-blue-600 hover:bg-blue-950 p-5 m-5 rounded-xl col-start-3 col-span-1"
        onClick={generateFibonacci}
      >
        Generate Fibonacci
      </button>
    </div>
  );
}
