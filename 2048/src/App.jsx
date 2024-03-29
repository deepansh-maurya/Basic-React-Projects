import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import "./App.css";
function App() {
  const [gameon, setgameon] = useState(true);
  const [score, setscore] = useState(0);
  const [block, setblock] = useState(Array(16).fill(" "));
  const [nextturn, setnextturn] = useState(true);
  const posibilityOne = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
  ];
  const posibilityTwo = [
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
  ];
  useEffect(() => {
    if (gameon) {
      let newblock = [...block];
      for (let i = 0; i < 15; i++) {
        let a = Math.floor(Math.random() * 16);
        if (newblock[a] == " ") {
          newblock[a] = 2;
          setTimeout(() => {
            setblock(newblock);
          }, 300);
          break;
        }
      }
    }
  }, [nextturn]);
  function handleTheBLocksForRightSide() {
    if (!block.includes(" ")) {
      setgameon(false);
    }
    setnextturn(!nextturn);
    if (gameon) {
      let newblock = [...block];

      for (let i = 0; i < posibilityOne.length; i++) {
        let [a, b, c, d] = posibilityOne[i];
        if (
          newblock[d] == newblock[c] &&
          newblock[d] != " " &&
          newblock[c] != " "
        ) {
          newblock[d] = newblock[c] + newblock[d];
          setscore(score + newblock[d]);
          newblock[c] = " ";
        }
        if (
          newblock[c] == newblock[b] &&
          newblock[c] != " " &&
          newblock[b] != " "
        ) {
          newblock[c] = newblock[c] + newblock[b];
          setscore(score + newblock[c]);

          newblock[b] = " ";
        }
        if (
          newblock[b] == newblock[a] &&
          newblock[a] != " " &&
          newblock[b] != " "
        ) {
          newblock[b] = newblock[b] + newblock[a];
          setscore(score + newblock[b]);

          newblock[a] = " ";
        }
        for (let i = 1; i <= 4; i++) {
          if (newblock[d] == " " && newblock[c] != " ") {
            newblock[d] = newblock[c];
            newblock[c] = " ";
          }
          if (newblock[c] == " " && newblock[b] != " ") {
            newblock[c] = newblock[b];
            newblock[b] = " ";
          }
          if (newblock[b] == " " && newblock[a] != " ") {
            newblock[b] = newblock[a];
            newblock[a] = " ";
          }
        }
      }
      if (gameon) setblock(newblock);
    }
  }
  function handleTheBLocksForLeftSide() {
    if (!block.includes(" ")) setgameon(false);

    setnextturn(!nextturn);
    if (gameon) {
      let newblock = [...block];

      for (let i = 0; i < posibilityOne.length; i++) {
        let [a, b, c, d] = posibilityOne[i];
        if (
          newblock[a] == newblock[b] &&
          newblock[a] != " " &&
          newblock[b] != " "
        ) {
          newblock[a] = newblock[a] + newblock[b];
          setscore(score + newblock[a]);

          newblock[b] = " ";
        }
        if (
          newblock[b] == newblock[c] &&
          newblock[b] != " " &&
          newblock[c] != " "
        ) {
          newblock[b] = newblock[b] + newblock[c];
          setscore(score + newblock[b]);

          newblock[c] = " ";
        }
        if (
          newblock[c] == newblock[d] &&
          newblock[c] != " " &&
          newblock[d] != " "
        ) {
          newblock[c] = newblock[c] + newblock[d];
          setscore(score + newblock[c]);

          newblock[d] = " ";
        }
        for (let i = 1; i <= 4; i++) {
          if (newblock[a] == " " && newblock[b] != " ") {
            newblock[a] = newblock[b];
            newblock[b] = " ";
          }
          if (newblock[b] == " " && newblock[c] != " ") {
            newblock[b] = newblock[c];
            newblock[c] = " ";
          }
          if (newblock[c] == " " && newblock[d] != " ") {
            newblock[c] = newblock[d];
            newblock[d] = " ";
          }
        }
      }
      if (gameon) setblock(newblock);
    }
  }
  function handleTheBLocksForBottomSide() {
    if (!block.includes(" ")) setgameon(false);

    setnextturn(!nextturn);
    if (gameon) {
      let newblock = [...block];

      for (let i = 0; i < posibilityTwo.length; i++) {
        let [a, b, c, d] = posibilityTwo[i];
        if (
          newblock[d] == newblock[c] &&
          newblock[d] != " " &&
          newblock[c] != " "
        ) {
          newblock[d] = newblock[c] + newblock[d];
          setscore(score + newblock[d]);

          newblock[c] = " ";
        }
        if (
          newblock[c] == newblock[b] &&
          newblock[c] != " " &&
          newblock[b] != " "
        ) {
          newblock[c] = newblock[c] + newblock[b];
          setscore(score + newblock[c]);

          newblock[b] = " ";
        }
        if (
          newblock[b] == newblock[a] &&
          newblock[a] != " " &&
          newblock[b] != " "
        ) {
          newblock[b] = newblock[b] + newblock[a];
          setscore(score + newblock[b]);

          newblock[a] = " ";
        }
        for (let i = 1; i <= 4; i++) {
          if (newblock[d] == " " && newblock[c] != " ") {
            newblock[d] = newblock[c];
            newblock[c] = " ";
          }
          if (newblock[c] == " " && newblock[b] != " ") {
            newblock[c] = newblock[b];
            newblock[b] = " ";
          }
          if (newblock[b] == " " && newblock[a] != " ") {
            newblock[b] = newblock[a];
            newblock[a] = " ";
          }
        }
      }
      if (gameon) setblock(newblock);
    }
  }
  function handleTheBLocksForTopSide() {
    if (!block.includes(" ")) setgameon(false);
    setnextturn(!nextturn);
    if (gameon) {
      let newblock = [...block];

      for (let i = 0; i < posibilityTwo.length; i++) {
        let [a, b, c, d] = posibilityTwo[i];
        if (
          newblock[a] == newblock[b] &&
          newblock[a] != " " &&
          newblock[b] != " "
        ) {
          newblock[a] = newblock[a] + newblock[b];
          setscore(score + newblock[a]);

          newblock[b] = " ";
        }
        if (
          newblock[b] == newblock[c] &&
          newblock[b] != " " &&
          newblock[c] != " "
        ) {
          newblock[b] = newblock[b] + newblock[c];
          setscore(score + newblock[b]);

          newblock[c] = " ";
        }
        if (
          newblock[c] == newblock[d] &&
          newblock[c] != " " &&
          newblock[d] != " "
        ) {
          newblock[c] = newblock[c] + newblock[d];
          setscore(score + newblock[c]);

          newblock[d] = " ";
        }
        for (let i = 1; i <= 4; i++) {
          if (newblock[a] == " " && newblock[b] != " ") {
            newblock[a] = newblock[b];
            newblock[b] = " ";
          }
          if (newblock[b] == " " && newblock[c] != " ") {
            newblock[b] = newblock[c];
            newblock[c] = " ";
          }
          if (newblock[c] == " " && newblock[d] != " ") {
            newblock[c] = newblock[d];
            newblock[d] = " ";
          }
        }
      }
      if (gameon) setblock(newblock);
    }
  }
  return (
    <>
      <div className="wrapper">
        <h1 className="score">{score}</h1>
        <h1>{gameon ? null : "Game Over"}</h1>
        <button
          onClick={() => {
            setblock(Array(16).fill(" "));
            setscore(0);
            setgameon(true);
            setnextturn(!nextturn);
          }}
        >
          Restart
        </button>
        <div tabIndex={0} className="board">
          {block.map((ele, index) => (
            <div className="block" key={index}>
              {ele}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="top" onClick={handleTheBLocksForLeftSide}>
            <FaArrowLeft />
          </button>
          <button className="top" onClick={handleTheBLocksForBottomSide}>
            <FaArrowDown />
          </button>
          <button className="top" onClick={handleTheBLocksForRightSide}>
            <FaArrowRight />
          </button>
          <button className="top1 top" onClick={handleTheBLocksForTopSide}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
