import { Container } from "react-bootstrap";
import "./SectionOne.css";

function SectionOne() {
  return (
    <Container className="justify-content-center">
      <div className="sectionContainer mb-5 mt-5">
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
    </Container>
  );
}

export default SectionOne;
