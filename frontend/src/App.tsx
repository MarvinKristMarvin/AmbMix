import "./App.scss";
import AmbianceHeader from "./Components/AmbianceHeader/AmbianceHeader.tsx";
import AmbianceSounds from "./Components/AmbianceSounds/AmbianceSounds.tsx";
import Header from "./Components/Header/Header";
import ProfileMenu from "./Components/ProfileMenu/ProfileMenu.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainDiv">
          <AmbianceHeader />
          <AmbianceSounds />
        </div>
        <aside>
          <ProfileMenu />
        </aside>
      </main>
    </div>
  );
}

export default App;
