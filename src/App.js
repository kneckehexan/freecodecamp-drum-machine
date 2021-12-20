import React from "react";
import Q from "./audio/Q.mp3";
import W from "./audio/W.mp3";
import E from "./audio/E.mp3";
import A from "./audio/A.mp3";
import S from "./audio/S.mp3";
import D from "./audio/D.mp3";
import Z from "./audio/Z.mp3";
import X from "./audio/X.mp3";
import C from "./audio/C.mp3";
import "./App.css";

const AUDIO = [
  { label: "Q", descr: "boing", url: Q },
  { label: "W", descr: "ripple", url: W },
  { label: "E", descr: "uwu", url: E },
  { label: "A", descr: "tiny laser", url: A },
  { label: "S", descr: "mario jump", url: S },
  { label: "D", descr: "midi piano", url: D },
  { label: "Z", descr: "click", url: Z },
  { label: "X", descr: "long laser", url: X },
  { label: "C", descr: "pulse", url: C }
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSound: "idle"
    };
    this.displaySound = this.displaySound.bind(this);
  }

  displaySound = (s) => {
    this.setState({
      currentSound: s
    });
  };

  render() {
    return (
      <div id="drum-machine">
        <h1 className="title">Drum Machine</h1>
        <Pads displaySound={this.displaySound} />
        <Display currentSound={this.state.currentSound} />
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    return <div id="display">{this.props.currentSound}</div>;
  }
}

class Pads extends React.Component {
  handleClick = (label) => {
    const audio = document.getElementById(label);
    let disp = AUDIO.find((x) => x.label === label).descr;
    this.props.displaySound(disp);
    audio.play();
  };

  handleKeyDown = (e) => {
    var k = e.key.toUpperCase();
    const audio = document.getElementById(k);
    if (audio) {
      audio.play();
      let disp = AUDIO.find((x) => x.label === k).descr;
      this.props.displaySound(disp);
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  renderButton = () => {
    return AUDIO.map((audioObj, index) => {
      return (
        <button
          key={index}
          className="drum-pad"
          id={audioObj.descr}
          onClick={() => this.handleClick(audioObj.label)}
        >
          {audioObj.label}
          <audio
            id={audioObj.label}
            src={audioObj.url}
            className="clip"
            type="audio/mpeg"
          >
            Browser doesn't support the audio element.
          </audio>
        </button>
      );
    });
  };

  render() {
    return <div id="key-pads">{this.renderButton()}</div>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DrumMachine />
      </header>
    </div>
  );
}

export default App;
