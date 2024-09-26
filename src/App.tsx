import "./App.css";
import { rooms } from "./assets/data/rooms";
import SchedulePage from "./components/schedule/SchedulePage";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center">Hello World!</h1>
      <SchedulePage room={rooms["F003"]} />
    </>
  );
}

export default App;
