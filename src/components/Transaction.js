import React from "react";

export default function Transaction({ transactions, setTransactions }) {
  return (
    <div className="transaction">
      {transactions.map((transaction, index) => {
        return (
          <>
            <li key={index}>{transaction}</li>
            <button>delete</button>
          </>
        );
      })}
    </div>
  );
}
