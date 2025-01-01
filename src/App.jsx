import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Signup from "./components/signup";
import TellTopic from "./components/TellTopic";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="flex justify-center relative items-center flex-col h-screen">
        <Card isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>
      {/* <div className="flex justify-center relative items-center h-screen flex-col bg-gradient-to-r from-yellow-700 via-white to-purple-800">
        <Card isLoading={isLoading} setIsLoading={setIsLoading} />
      </div> */}
    </>
  );
};

export default App;
