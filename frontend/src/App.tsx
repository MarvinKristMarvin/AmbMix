import "./App.scss";
import AmbianceHeader from "./Components/AmbianceHeader/AmbianceHeader.tsx";
import AmbianceSounds from "./Components/AmbianceSounds/AmbianceSounds.tsx";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AmbianceHeader />
        <AmbianceSounds />
      </main>
      <aside></aside>
    </div>
  );
}

export default App;
