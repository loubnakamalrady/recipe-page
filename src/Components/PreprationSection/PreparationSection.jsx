import React from "react";
import { PREPARATION } from "../../data.js";
import { Container } from "react-bootstrap";
import "./Preparation.css";

function Preparation() {
  return (
    <Container className="px-4 my-5">
      <div className="Preparation-Container">
        <div>
          <h2 className="preparation-title mt-2 mb-4">Preparation Time</h2>
        </div>
        <div className="actual-prep">
          <ul>
            {PREPARATION.map((item, index) => (
              <li key={index} className="mb-3">
                <strong>{item.Title}:</strong> {item.Desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Preparation;
