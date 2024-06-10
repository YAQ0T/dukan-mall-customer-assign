import "./general-styles/variables.css";
import "./general-styles/layout.css";
import { Header } from "./pages/home/Header.jsx";
import { Main } from "./pages/home/Main.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
