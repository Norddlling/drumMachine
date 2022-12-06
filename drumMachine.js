const App = () => {
  const [displaySoundName, setDisplaySoundName] = React.useState("Press button");
  const [volumeLevel, setVolumeLevel] = React.useState(50);
  const selectedAudio = React.useRef([]);
  React.useEffect(() => {
    window.addEventListener("keydown", (event) => {
      event.target.blur();
      switch(event.key) {
        case "q":
          (handleClick(audioSourse[0]), playAudio(0));
          break;
        case "w":
          (handleClick(audioSourse[1]), playAudio(1));
          break;
        case "e":
          (handleClick(audioSourse[2]), playAudio(2));
          break;
        case "a":
          (handleClick(audioSourse[3]), playAudio(3));
          break;
        case "s":
          (handleClick(audioSourse[4]), playAudio(4));
          break;
        case "d":
          (handleClick(audioSourse[5]), playAudio(5));
          break;
        case "z":
          (handleClick(audioSourse[6]), playAudio(6));
          break;
        case "x":
          (handleClick(audioSourse[7]), playAudio(7));
          break;
        case "c":
          (handleClick(audioSourse[8]), playAudio(8));
          break;
      }
    })
    return () => {
      window.removeEventListener("keydown", func)
    }
 }, []);
  
  const handleClick = (audio) => {
    setDisplaySoundName(audio.name);
  }
  const playAudio = (index) => {
    selectedAudio.current[index].play();
   }
  
  const pressKey = (index) => {
      selectedAudio.current[index].play();
  }
  
  const controlVolume = (event) => {
    setVolumeLevel(Number(event.target.value));
  }
  
  const volumeControl = () => {
    const sounds = audioSourse.map(sound => document.getElementById(sound.key))
    sounds.forEach(audio => {
      if(audio) {
        audio.volume = volumeLevel / 100
      }
    })
}
  
  return (
    <div id="drum-machine" className="bg-dark shadow-lg row rounded d-flex justify-content-center align-items-center">
      {volumeControl()}
      <div className="col-sm-6">
        <div className="bg-white rounded m-3 shadow-lg d-flex justify-content-center" id="display">
          {displaySoundName}
        </div>
        <div className="bg-white rounded m-3 shadow-lg d-flex justify-content-center">
          {volumeLevel}
        </div>
        <div className="d-flex justify-content-center">
          <input type="range" min="0" max="100" step="1" value={volumeLevel} onChange={controlVolume}/>
        </div>
      </div>
      <div className="col-sm-6 d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
        {audioSourse.map((audio, index) =>
          <div className="col-4 d-flex justify-content-center" key={audio.key} onKeyPress={() => pressKey(index)}>
            <button id={audio.id} className="bg-info drum-pad shadow-lg rounded m-2" onClick={() => {playAudio(index), handleClick(audio)}}>
              {audio.key}
              
              <audio id={audio.key} src={audio.source} className="clip" ref={elem => selectedAudio.current.push(elem)}></audio>
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

const audioSourse = [
  { id: "heater1", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", key: "Q", name: "Heater 1"}, 
  { id: "heater2", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", key: "W", name: "Heater 2"}, 
  { id: "heater3", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", key: "E", name: "Heater 3"}, 
  { id: "heater4", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", key: "A", name: "Heater 4"}, 
  { id: "clap", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", key: "S", name: "Clap"}, 
  { id: "openHH", source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", key: "D", name: "Open-HH"}, 
  { id: "kickNHat", source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", key: "Z", name: "Kick-n'-Hat"}, 
  { id: "kick", source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", key: "X", name: "Kick"}, 
  { id: "closedHH", source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", key: "C", name: "Closed-HH"}
];
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
