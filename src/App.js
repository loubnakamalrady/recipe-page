// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import SectionOne from "./Components/SectionOne/SectionOne";
import Preparation from "./Components/PreprationSection/PreparationSection";
// import Nutrition from "./Components/NutritionSection/Nutrition";
import Ingredients from "./Components/IngredientsSection/Ingredients";
import Instructions from "./Components/InstructionsSection/Instructions";
import Nutrition from "./Components/NutritionSection/Nutrition";
// import Ingredients from "./Components/IngredientsSection/Ingredients";
function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <hr />
      <Preparation />
      <hr />
      <Ingredients />
      <hr />
      <Instructions />
      <hr />
      <Nutrition />
      <hr />
    </>
  );
}

export default App;
