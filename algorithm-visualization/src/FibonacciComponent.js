import { useState } from "react";

export default function FibonacciComponent() {
  const [fibonacci, setFibonacci] = useState([]);
  const [heightScale, setHeightScale] = useState(0.11);
  const svgHeight = 510;

  const generateFibonacci = () => {
    let fib = [0, 1];

    for (let i = 1; i < 19; i++) {
      fib.push(fib[i] + fib[i - 1]);
    }
    setFibonacci(fib);
  };

  return (
    <div className="grid grid-cols-5">
      <h2 className="text-4xl font-bold mb-4 col-start-3 col-span-1">
        Fibonacci
      </h2>
      <svg
        viewBox={`0 0 850 ${svgHeight}`}
        className="w-full h-auto bg-slate-900 col-start-2 col-span-3"
        preserveAspectRatio="xMidYMid meet"
      >
        {fibonacci.map((num, i) => (
          <g key={i}>
            <rect
              x={i * 40}
              y={490 - num * heightScale}
              width={30}
              height={num * heightScale}
              fill="steelblue"
            ></rect>
            <text
              x={i * 40 + 15}
              y={490 + 15}
              textAnchor="middle"
              fontSize={12}
              fill="white"
            >
              {num}
            </text>
          </g>
        ))}
      </svg>
      <button
        className="bg-blue-600 hover:bg-blue-950 p-5 m-5 rounded-xl col-start-3 col-span-1"
        onClick={generateFibonacci}
      >
        Generate Fibonacci
      </button>
    </div>
  );
}
