import "./MixerSound.scss";

const MixerSound = () => {
  return (
    <div className="mixerSound">
      <div className="image-div">
        <img src="/public/images/6083nplb.bmp" alt="little frog" />
      </div>
      <div className="sound-name">little frog</div>
      <div className="sound-options">
        <div className="volume-option">
          <div className="option-acronym">
            <span>vol</span>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              className="option-slider"
            />
          </div>
          <div className="button-div">
            <div>but</div>
          </div>
        </div>
        <div className="frequency-option">
          <div className="option-acronym">
            <span>fre</span>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              className="option-slider"
            />
          </div>
          <div className="button-div">
            <div>but</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixerSound;
