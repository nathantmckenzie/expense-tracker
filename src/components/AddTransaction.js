import React, { useState } from "react";
import InputField from "./InputField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
}) {
  const classes = useStyles();
  return (
    <div>
      <h6>Add Transaction</h6>
      <InputField input={input} setInput={setInput} />
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setTransactions([...transactions, input])}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
