import "./App.css";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import Transaction from "./components/Transaction";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("0");
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState("income");
  const [balance, setBalance] = useState([]);

  return (
    <div className="title">
      Expense Tracker{" "}
      <Balance balance={balance} setBalance={setBalance} amount={amount} />
      <Transaction
        transactions={transactions}
        setTransactions={setTransactions}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
      />
      <AddTransaction
        input={input}
        setInput={setInput}
        transactions={transactions}
        setTransactions={setTransactions}
        amount={amount}
        setAmount={setAmount}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
        balance={balance}
        setBalance={setBalance}
      />
    </div>
  );
}

export default App;
