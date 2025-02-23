import "./styles.css";
import ProgressBar from "./ProgressBar";

export default function App() {
  const progresses = [5, 25, 50, 75, 100];

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {progresses.map((progress, i) => (
        <ProgressBar key={i} progress={progress} />
      ))}
    </div>
  );
}
