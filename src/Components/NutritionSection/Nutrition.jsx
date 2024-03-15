import React from "react";
import { Container } from "react-bootstrap";
import { NUTRITION } from "../../data";
import "./Nutrition.css"; // Import your CSS file for styling

export default function Nutrition() {
  return (
    <Container className="px-4 my-5">
      <div className="nutritionContainer">
        <div className="mb-4">
          <h2>Nutrition</h2>
        </div>
        <div className="actual-nutrition">
          <ul className="unstyled-list">
            {NUTRITION.map((item, index) => (
              <li key={index} className="mb-3">
                <div className="actualNuts">
                  <span id="itemName">{item.Name}</span>
                  <span id="itemCount">{item.Count}</span>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
