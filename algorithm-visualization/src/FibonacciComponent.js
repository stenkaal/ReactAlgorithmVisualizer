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
    <div className="size-1/2 justify-center">
      <h2 className="text-4xl font-bold mb-4">Fibonacci</h2>
      <svg width={850} height={svgHeight} className="bg-slate-900">
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
        className="bg-blue-600 p-5 m-5 rounded-xl"
        onClick={generateFibonacci}
      >
        Generate Fibonacci
      </button>
    </div>
  );
}
