import React from "react";

export default function Expense({
  expense,
  setExpense,
  totalExpense,
  setTotalExpense,
}) {
  return (
    <div>
      Expenses:
      <input
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      ></input>
      <button onClick={() => setTotalExpense(Number(expense))}>Add</button>
    </div>
  );
}
