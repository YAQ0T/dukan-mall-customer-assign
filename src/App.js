import "./general-styles/variables.css";
import "./general-styles/layout.css";
import { Header } from "./components/header/Header.jsx";
import { Home } from "./pages/home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
