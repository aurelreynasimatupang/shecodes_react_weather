import "./styles.css";
import Widget from "./Widget.js";

export default function App() {
  return (
    <div className="App">
      <Widget />
      <p className="footer">
        Coded by:{" "}
        <a href="https://github.com/jorke-is-dangling/shecodes_react">
          Aurel Reyna
        </a>
        .
      </p>
    </div>
  );
}
