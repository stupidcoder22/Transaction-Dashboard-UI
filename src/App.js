import "./App.css";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="flex">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
