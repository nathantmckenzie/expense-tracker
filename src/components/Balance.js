import React, { useState } from "react";

export default function Balance({ balance, setBalance, amount }) {
  return (
    <div className="balance">
      {setBalance(amount)}Your Balance: $ {balance}
    </div>
  );
}
