import React from "react";

export default function Balance({
  balance,
  setBalance,
  amount,
  final,
  setFinal,
}) {
  return (
    <div className="balance">
      Your Balance: ${console.log("BALANCEE", balance)}
      {setFinal(balance.reduce((accum, value) => accum + value, 0))}
      {final}
    </div>
  );
}
