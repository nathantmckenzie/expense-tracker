import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields({
  input,
  setInput,
  amount,
  setAmount,
}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label="item"
        id="standard-basic"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <TextField
        label="amount"
        type="number"
        id="standard-basic"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value === 0 ? 0 : parseInt(e.target.value, 10))
        }
      />
    </form>
  );
}
