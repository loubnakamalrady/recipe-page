import React from "react";
import { Container } from "react-bootstrap";
import { INSTRUCTIONS } from "../../data";
import "./Instructions.css";
export default function Instructions() {
  return (
    <>
      <Container className="px-4 my-5">
        <div className="instructionsContainer">
          <div className="mb-4">
            <h2>Instructions</h2>
          </div>
          <div className="actual-instructions">
            <ol>
              {INSTRUCTIONS.map((item, itemIndex) => (
                <li key={itemIndex} className="mt-2">
                  <strong>{item.Title}: </strong>
                  {item.Desc}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </>
  );
}
