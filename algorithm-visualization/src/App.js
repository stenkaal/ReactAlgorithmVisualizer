import FibonacciComponent from "./FibonacciComponent";

export default function App() {
  return (
    //TODO: Change from text and content center to grid layout for easier alignment
    <div className="text-center content-center size-full">
      <h1 className=" font-extrabold text-5xl p-5 m-5">
        DSA - Data Structures & Algorithms
      </h1>
      <FibonacciComponent />
    </div>
  );
}
