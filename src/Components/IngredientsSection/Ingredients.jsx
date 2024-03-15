import React from "react";
import { INGREDIENTS } from "../../data.js";
import { Container } from "react-bootstrap";
import "./Ingredients.css";

export default function Ingredients() {
  return (
    <>
      <Container className="px-4 my-5">
        <div className="ingredientsContainer">
          <div className="mb-4">
            <h2>Ingredients</h2>
          </div>
          <div className="ingredients-actual">
            <ul>
              {INGREDIENTS.map((item, itemIndex) => (
                <li className="mt-2" key={itemIndex}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
