import { useState } from "react";
import "./AmbianceSound.scss";

export default function AmbianceSound() {
  const [position, setPosition] = useState(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const slider = e.target;
    const value =
      ((Number(slider.value) - Number(slider.min)) /
        (Number(slider.max) - Number(slider.min))) *
      100;

    // Convert value to a number between 2 and 95.5 (avoiding lettre going further than the slider)
    const newValue = (value * (95.5 - 2)) / 100 + 2;
    setPosition(newValue);
    console.log(newValue);
  };
  return (
    <div className="AmbianceSound">
      <div className="firstPart">
        <div>
          <img src="" alt="" />
        </div>
        <p>Little frog</p>
        <div className="slider-container">
          <input
            className="volumeSlider slider"
            type="range"
            min="0"
            max="100"
            onChange={handleSliderChange}
          />
          <div className="slider-label" style={{ left: `${position}%` }}>
            V
          </div>
        </div>
        <div>
          <input
            className="reverbSlider"
            type="range"
            min="0"
            max="100"
            value="50"
            id="gfh"
          />
        </div>
        <div>
          <input
            className="directionSlider"
            type="range"
            min="0"
            max="100"
            value="50"
            id="gfgfhf"
          />
        </div>
      </div>
      {/* <div className="secondPart">Second part</div> */}
    </div>
  );
}
