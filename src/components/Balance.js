import React, { useState } from "react";

export default function Balance({ balance, setBalance, amount }) {
  return (
    <div className="balance">
      Your Balance: $
      {balance.length > 0 ? balance.reduce((accum, value) => accum + value) : 0}
    </div>
  );
}
