import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {createTransaction} from '../features/transactions/transactionSlice'

export default function Form() {
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [amount, setAmount] = useState();
    const dispatch = useDispatch();
    const {isLoading, isError, error} = useSelector((state) => state.transaction)
    console.log('{isLoading, isError, error} :>> ', {isLoading, isError, error});

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(createTransaction({
            name,
            type,
            amount: Number(amount)
        }))
    }
    return (
        <div className="form">
            <h3>Add new transaction</h3>
            <form onSubmit={handleCreate}>
                <div className="form-group">
                    <label htmlFor="transaction_name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="My Salary"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label htmlFor="transaction_type">Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            checked = {type === "income"}
                            onChange={() => setType("income")}
                        />
                        <label htmlFor="transaction_type">Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked = {type === "expense"}
                            onChange={() => setType("expense")}
                        />
                        <label htmlFor="transaction_type">Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction_amount">Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        name="amount"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                
                <button disabled={isLoading} className="btn" type='submit'>Add Transaction</button>
                {!isLoading && isError && (
                    <p className="text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md text-sm">
                    ⚠️ Something went wrong. Please try again.
                    </p>)}
                <button className="btn cancel_edit">Cancel Edit</button>
            </form>
        </div>
    )
}
