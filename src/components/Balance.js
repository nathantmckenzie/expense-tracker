import React, { useState } from "react";

export default function Balance() {
  const [balance, setBalance] = useState(0);

  return <div className="balance">Your Balance: $ {balance}</div>;
}
