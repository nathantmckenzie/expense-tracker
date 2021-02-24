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
}) {
  const classes = useStyles();
  return (
    <div>
      <h6>Add Transaction</h6>
      <InputField
        input={input}
        setInput={setInput}
        amount={amount}
        setAmount={setAmount}
      />
      <select name="transaction-type" id="cars">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            setTransactions([
              ...transactions,
              {
                input: input,
                amount: amount,
                transactionType: transactionType,
              },
            ])
          }
        >
          Add
        </Button>
        {console.log(transactions)}
      </div>
    </div>
  );
}
