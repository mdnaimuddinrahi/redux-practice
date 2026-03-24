import deleteImage from '../../assets/delete.svg'
import editImage from '../../assets/edit.svg'

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
  return (
        <li className={`transaction ${transaction.type}`}>
            <p>{transaction.name}</p>
            <div className="right">
                <p>৳ {transaction.amount}</p>
                <button className="link">
                    <img
                        className="icon"
                        src={editImage}
                    />
                </button>
                <button className="link">
                    <img
                        className="icon"
                        src={deleteImage}
                    />
                </button>
            </div>
        </li>
  )
}
