import React from "react";

export default function Transaction({
  transactions,
  setTransactions,
  transactionType,
  setTransactionType,
}) {
  return (
    <div className="transaction">
      {transactions.map((transaction, index) => {
        return (
          <>
            <li key={index}>
              {transaction.input} :
              {transaction.transactionType === "income"
                ? "$" + transaction.amount
                : "-$" + transaction.amount}{" "}
              {transaction.transactionType}
            </li>

            <button
              onClick={() =>
                setTransactions(
                  transactions.filter((el) => el.id !== transaction.id)
                )
              }
            >
              delete
            </button>
          </>
        );
      })}
    </div>
  );
}
