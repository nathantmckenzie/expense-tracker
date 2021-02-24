import React from "react";

export default function Balance({ balance, setBalance, amount }) {
  return (
    <div className="balance">
      Your Balance: ${console.log("BALANCEE", balance)}
      {balance.reduce((accum, value) => accum + value, 0)}
    </div>
  );
}
