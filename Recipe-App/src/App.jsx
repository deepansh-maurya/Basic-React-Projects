import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { RecipeContextProvider } from "./components/RecipeContext";

function App() {
  return (
    <div>
      <RecipeContextProvider>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </RecipeContextProvider>
    </div>
  );
}

export default App;
