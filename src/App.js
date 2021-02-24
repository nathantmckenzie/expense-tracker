import "./App.css";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import Transaction from "./components/Transaction";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="title">
      Expense Tracker <Balance />
      <Transaction
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <AddTransaction
        input={input}
        setInput={setInput}
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
