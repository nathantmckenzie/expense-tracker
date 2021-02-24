import React, { useState } from "react";
import InputField from "./InputField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function AddTransaction({
  input,
  setInput,
  transactions,
  setTransactions,
  amount,
  setAmount,
  transactionType,
  setTransactionType,
  balance,
  setBalance,
}) {
  const classes = useStyles();

  function submitHandler() {
    setTransactions([
      ...transactions,
      {
        input: input,
        amount: amount,
        transactionType: transactionType,
      },
    ]);
    setBalance([...balance, transactionType === "income" ? amount : -amount]);
    setInput("");
    setAmount(0);
  }

  function changeTransactionType(evt) {
    if (evt.target.value === "income") {
      setTransactionType("income");
    } else if (evt.target.value === "expense") {
      setTransactionType("expense");
    }
  }

  return (
    <div>
      <h6>Add Transaction</h6>
      <InputField
        input={input}
        setInput={setInput}
        amount={amount}
        setAmount={setAmount}
      />
      <select
        name="transaction-type"
        id="cars"
        onChange={changeTransactionType}
      >
        <option value="income" onClick={() => setTransactionType("income")}>
          Income
        </option>
        <option value="expense" onClick={() => setTransactionType("expense")}>
          Expense
        </option>
      </select>
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={submitHandler}>
          Add
        </Button>
      </div>
    </div>
  );
}
