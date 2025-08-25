// import FibonacciComponent from "./FibonacciComponent";
import D3Test from "./D3Test";

export default function App() {
  return (
    //TODO: Change from text and content center to grid layout for easier alignment
    <div className="text-center content-center size-full">
      <h1 className=" font-extrabold text-5xl pb-5 mb-5">
        DSA - Data Structures & Algorithms
      </h1>
      <D3Test />
      {/* <FibonacciComponent /> */}
    </div>
  );
}
