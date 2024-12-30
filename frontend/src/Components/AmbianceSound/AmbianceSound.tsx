import { useEffect, useRef, useState } from "react";
import "./AmbianceSound.scss";

export default function AmbianceSound() {
  const volumeSliderRef = useRef<HTMLInputElement>(null);
  const reverbSliderRef = useRef<HTMLInputElement>(null);
  const directionSliderRef = useRef<HTMLInputElement>(null);

  const applyGradient = (
    slider: HTMLInputElement,
    activeColor: string,
    inactiveColor: string
  ) => {
    const ratio =
      ((parseFloat(slider.value) - parseFloat(slider.min)) /
        (parseFloat(slider.max) - parseFloat(slider.min))) *
      100;
    slider.style.background = `linear-gradient(90deg, ${activeColor} ${ratio}%, ${inactiveColor} ${ratio}%)`;
  };

  const initializeSlider = (
    sliderRef: React.RefObject<HTMLInputElement>,
    activeColor: string,
    inactiveColor: string
  ) => {
    const slider = sliderRef.current;

    if (slider) {
      const handleInput = () => {
        applyGradient(slider, activeColor, inactiveColor);
      };

      // Initialize the gradient on mount
      applyGradient(slider, activeColor, inactiveColor);

      // Attach event listener
      slider.addEventListener("input", handleInput);

      // Cleanup the event listener on unmount
      return () => {
        slider.removeEventListener("input", handleInput);
      };
    }
  };

  useEffect(() => {
    const cleanupVolume = initializeSlider(
      volumeSliderRef,
      "#5CFFC4",
      "#006D4C"
    );

    const cleanupReverb = initializeSlider(
      reverbSliderRef,
      "#FFA25C",
      "#4C2D00"
      // "#FF7A5C",
      // "#4C006D"
    );

    const cleanupDirection = initializeSlider(
      directionSliderRef,
      "#3d3d3d",
      "#3d3d3d"
      // "#FFA25C",
      // "#4C2D00"
    );

    return () => {
      cleanupVolume?.();
      cleanupReverb?.();
      cleanupDirection?.();
    };
  }, []);

  return (
    <div className="AmbianceSound">
      <div className="firstPart">
        <div className="img_container">
          <img src="images/bird1.jpg" alt="" />
        </div>
        <p className="soundName">Little frog</p>
        <div className="volumeSliderContainer">
          <p className="optionName">VOLUME</p>
          <p className="optionValue">80%</p>
          <input
            ref={volumeSliderRef}
            className="volumeSlider"
            type="range"
            min="0"
            max="100"
          />
        </div>
        <div className="reverbSliderContainer">
          <p className="optionName">REVERB</p>
          <p className="optionValue">0%</p>
          <input
            ref={reverbSliderRef}
            className="reverbSlider"
            type="range"
            min="0"
            max="100"
          />
        </div>
        <div className="directionSliderContainer">
          <p className="optionName">DIRECTION</p>
          <p className="optionValue">50%</p>
          <input
            ref={directionSliderRef}
            className="directionSlider"
            type="range"
            min="0"
            max="100"
          />
        </div>
      </div>
    </div>
  );
}
