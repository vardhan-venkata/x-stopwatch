import React, { useState, useEffect } from "react";

function StopWatchTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    if (!isRunning) {
      alert("Timer is not running. Start before stopping the timer");
    }
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stopwatch</h1>
      <h2 style={styles.time}>Time: {formatTime(seconds)}</h2>
      <div style={styles.buttons}>
        <button onClick={handleStartStop} style={styles.button}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "50px auto",
    maxWidth: "300px",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  time: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "darkblue",
    color: "white",
  },
};

export default StopWatchTimer;
