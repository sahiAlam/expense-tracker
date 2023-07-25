import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const handleChangeTitle = (e) => setTitleInput(e.target.value);
  const handleChangeAmount = (e) => setAmountInput(e.target.value);
  const handleDateChange = (e) => setDateInput(e.target.value);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (titleInput && amountInput && dateInput) {
      const expenseData = {
        title: titleInput,
        amount: parseFloat(amountInput), // convert to float for calculation purposes later on
        date: new Date(dateInput),
      };

      props.onSaveExpenseData(expenseData);

      setTitleInput("");
      setAmountInput("");
      setDateInput("");
    } else {
      alert("Please fill out all fields..");
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter Title"
            value={titleInput}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Enter Amount"
            value={amountInput}
            onChange={handleChangeAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            placeholder="Enter Date"
            value={dateInput}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelEditingForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
