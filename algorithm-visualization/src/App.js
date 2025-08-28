import FibonacciWithD3 from "./Algorithms/FibonacciWithD3";
import InsertionSort from "./Algorithms/InsertionSort";
// import FibonacciComponent from "./FibonacciComponent";
// import D3Test from "./D3Test";
// import BubbleSort from "./Algorithms/BubbleSort";
// import SelectionSort from "./Algorithms/SelectionSort";

export default function App() {
  return (
    <div className="text-center content-center size-full">
      <h1 className=" font-extrabold text-5xl pb-5 mb-5">
        DSA - Data Structures & Algorithms
      </h1>
      <FibonacciWithD3 />
      <InsertionSort />
      {/* <SelectionSort /> */}
      {/* <BubbleSort /> */}
      {/* <D3Test /> */}
      {/* <FibonacciComponent /> */}
    </div>
  );
}
