import "../styles/App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButton'

function App() {

  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
