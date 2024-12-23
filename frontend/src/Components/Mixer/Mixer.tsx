import "./Mixer.scss";

import MixerSound from "../MixerSound/MixerSound";

const Mixer = () => {
  return (
    <div className="mixer">
      <div className="mixerContainer">
        <MixerSound></MixerSound>
        <MixerSound></MixerSound>
        <MixerSound></MixerSound>
        <MixerSound></MixerSound>
      </div>
    </div>
  );
};

export default Mixer;
