import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {changeTransaction, createTransaction} from '../features/transactions/transactionSlice'
import { editInActive } from '../features/transactions/transactionSlice'

export default function Form() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();
    const {isLoading, isError, error} = useSelector((state) => state.transaction)
    const [editMode, setEditMode] = useState(false);
    const editing = useSelector((state) => state.transaction.editing)
    
    const reset = () => {
        setName('')
        setType('')
        setAmount('')
        console.log('name, type, amount', name, type, amount)
    }

    const handleCreate = (e) => {
        e.preventDefault()
        if (editMode) {
            dispatch(changeTransaction({id: editing.id, data: {
                name,
                type,
                amount: Number(amount)
            }}))
            cancelEditMode();
        } else {
            dispatch(createTransaction({
                name,
                type,
                amount: Number(amount)
            }))
            reset();
        }
       
        
    }

    const cancelEditMode = () => {
        setEditMode(false)
        reset()
        dispatch(editInActive())
    }
    
    useEffect(() => {
        const {id, name, amount, type} = editing || {};

        if (id) {
            setEditMode(true)
            setName(name)
            setAmount(amount)
            setType(type)
        } else {
            setEditMode(false)
            reset()
        }
    }, [editing])

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
                        value={name}
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
                        value={amount}
                    />
                </div>
                
                <button disabled={isLoading} className="btn" type='submit'>{editMode ? 'Edit Transaction' : 'Add Transaction'}</button>
                {!isLoading && isError && (
                    <p className="text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md text-sm">
                    ⚠️ Something went wrong. Please try again.
                    </p>)}
                {editMode && <button className="btn cancel_edit" onClick={cancelEditMode}>Cancel Edit</button>}
            </form>
        </div>
    )
}
