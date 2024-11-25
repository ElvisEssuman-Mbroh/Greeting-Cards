import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-wrap justify-center gap-6 p-6">
        <GreetingCards title="Happy Birthday" message="Wishing you an awesome day!" />
        <GreetingCards title="Congratulations" message="So proud of your achievements!" />
        <GreetingCards title="Thank You" message="I appreciate everything you do." />
      </div>
    </div>
  );
};

export default App;
