import React, { useEffect, useState } from "react";
import "./Game.css";
export const Gamecomponent = () => {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
  ];
  const [end, setend] = useState(true);
  let initialArray = new Array(9).fill("  ");
  const [turn, setturn] = useState("X");
  let [fordrawn, setfordrawn] = useState(false);
  const [result, setresult] = useState("");
  const [turnarray, setturnarray] = useState(initialArray);
  function handleturn(block) {
    if (turnarray[block] == "  " && end) {
      const newTurnArray = [...turnarray];
      newTurnArray[block] = turn;
      setturnarray(newTurnArray);
      setturn(turn == "X" ? "O" : "X");
      setresult(turn == "X" ? "O Turn" : "X Turn");
    }
  }
  useEffect(() => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        turnarray[a] != "  " &&
        turnarray[b] != "  " &&
        turnarray[c] != "  "
      ) {
        if (
          turnarray[a] == turnarray[b] &&
          turnarray[b] == turnarray[c] &&
          turnarray[c] == turnarray[a]
        ) {
          console.log("qwerty", Math.random());
          setresult(`${turnarray[a]} Won`);
          setend(false);
          return;
        }
      }
    }
    if (!turnarray.includes("  ")) {
      console.log("qwerty elseif", Math.random());
      setresult(`Match Drawn`);
      setfordrawn(true);
    }
  }, [turn, turnarray]);
  return (
    <>
      <div className="wrapper">
        <div className="board">
          <h1>TIC TAC TOE</h1>
          <div className="row">
            <div onClick={() => handleturn(0)} className="block">
              {turnarray[0]}
            </div>
            <div onClick={() => handleturn(1)} className="block">
              {turnarray[1]}
            </div>
            <div onClick={() => handleturn(2)} className="block">
              {turnarray[2]}
            </div>
          </div>
          <div className="row">
            <div onClick={() => handleturn(3)} className="block">
              {turnarray[3]}
            </div>
            <div onClick={() => handleturn(4)} className="block">
              {turnarray[4]}
            </div>
            <div onClick={() => handleturn(5)} className="block">
              {turnarray[5]}
            </div>
          </div>
          <div className="row">
            <div onClick={() => handleturn(6)} className="block">
              {turnarray[6]}
            </div>
            <div onClick={() => handleturn(7)} className="block">
              {turnarray[7]}
            </div>
            <div onClick={() => handleturn(8)} className="block">
              {turnarray[8]}
            </div>
          </div>
          <div className="result">{result}</div>
          <div>
            {end ? (
              <button>{fordrawn ? "Restart" : "Game is Running..."}</button>
            ) : (
              <button
                onClick={() => {
                  setend(true);
                  setresult("");
                  initialArray = new Array(9).fill("  ");
                  setturn("X");
                  setturnarray(initialArray);
                }}
              >
                {` Restart the Game`}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
