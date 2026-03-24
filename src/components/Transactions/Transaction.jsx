import { useDispatch } from 'react-redux'
import deleteImage from '../../assets/delete.svg'
import editImage from '../../assets/edit.svg'
import { editActive, removeTransaction } from '../../features/transactions/transactionSlice'

export default function Transaction({transaction}) {
    // {
    //     "data": {
    //         "name": "Virginia Pittman",
    //         "type": "expense",
    //         "amount": 79,
    //         "updated_at": "2026-03-24",
    //         "created_at": "2026-03-24",
    //         "id": 2
    //     }
    // }
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(editActive(transaction))
    }

    const handleDelete = (id) => {
        dispatch(removeTransaction(id))
    }
    return (
            <li className={`transaction ${transaction.type}`}>
                <p>{transaction.name}</p>
                <div className="right">
                    <p>৳ {transaction.amount}</p>
                    <button className="link" onClick={handleEdit}>
                        <img
                            className="icon"
                            src={editImage}
                        />
                    </button>
                    <button className="link" onClick={() => handleDelete(transaction.id)}>
                        <img
                            className="icon"
                            src={deleteImage}
                        />
                    </button>
                </div>
            </li>
    )
}
