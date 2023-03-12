import "./App.css";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import TransactionStats from "./components/TransactionStats";
import { TransactionProvider } from "./context/TransactionContext";
import image from "../src/assets/bgColored.jpg";

function App() {
  return (
    <TransactionProvider>
      <div className="App" style={{ backgroundImage: `url(${image})` }}>
        <Header />

        <div class="container">
          <TransactionStats />
          <TransactionList />
        </div>
      </div>
    </TransactionProvider>
  );
}

export default App;
