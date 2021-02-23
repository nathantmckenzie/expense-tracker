import React from "react";

export default function Income({
  income,
  setIncome,
  totalIncome,
  setTotalIncome,
  totalExpense,
  setTotalExpense,
  expense,
  setExpense,
}) {
  return (
    <div>
      Income:
      <input value={income} onChange={(e) => setIncome(e.target.value)}></input>
      <button onClick={() => setTotalIncome(Number(income))}>Add</button>
      <br />
    </div>
  );
}
