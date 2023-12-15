import "./styles.css";
import { useState } from "react";

const starRatingStyle = {
  display: "flex",
  alignItems: "center",
  border: "2px solid black",
};

export default function App() {
  return (
    <div className="App">
      <StarRatings maxrating={10} />
    </div>
  );
}

const StarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
};

function StarRatings({ maxrating }) {
  const [ifFull, setfull] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  function onRate(index) {
    setfull(index + 1);
  }
  function onMouseIn(i) {
    setTempRating(i + 1);
  }
  function onMouseout(i) {
    ifFull ? setTempRating(ifFull) : setTempRating(0);
  }

  return (
    <div style={StarStyle}>
      {Array.from({ length: maxrating }, (_, i) => (
        <Star
          onRate={() => onRate(i)}
          isFilled={tempRating ? tempRating > i : ifFull > i}
          onMouseIn={() => onMouseIn(i)}
          onMouseout={() => onMouseout(i)}
        />
      ))}
      <p>{tempRating ? tempRating : ifFull} </p>
    </div>
  );
}

function Star({ onRate, isFilled, onMouseIn, onMouseout }) {
  return (
    <span onClick={onRate} onMouseEnter={onMouseIn} onMouseLeave={onMouseout}>
      <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="12.5,1.25 14.5,8 22.5,8 17.5,13 20,21 12.5,16 5,21 7.5,13 3.5,8 10.5,8"
          fill={isFilled ? "yellow" : "white"}
          stroke="yellow"
          strokeWidth="1.3px"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
