import React, { useState, useContext } from "react";
import swal from "sweetalert";
import shortid from 'shortid';
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const formSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: shortid.generate(),
      text,
      amount: +amount,
    };
    if (!text || !amount) {
      swal({
        text: "Please add a text and amount!",
      });
    } else {
      addTransaction(newTransaction);
    }

    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={formSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount (negative - expense, positive - income) <br />
            e.g. +100 or -100
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
