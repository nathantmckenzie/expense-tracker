import React from "react";
import { useState } from "react";
import Income from "./Income";
import Expense from "./Expense";

export default function Balance() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  return (
    <div>
      YOUR BALANCE: ${totalIncome - totalExpense}
      <br />
      <Income
        income={income}
        setIncome={setIncome}
        totalIncome={totalIncome}
        setTotalIncome={setTotalIncome}
      />
      <Expense
        totalExpense={totalExpense}
        setTotalExpense={setTotalExpense}
        expense={expense}
        setExpense={setExpense}
      />
    </div>
  );
}
