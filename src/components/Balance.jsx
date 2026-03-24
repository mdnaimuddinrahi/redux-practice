import { useSelector } from 'react-redux'

export default function Balance() {
  const { transactions } = useSelector((state) => state.transaction)

  const totalAmount = transactions?.reduce((total, transaction) => {
    return transaction.type === 'expense'
      ? Number(total) - Number(transaction.amount)
      : Number(total) + Number(transaction.amount)
  }, 0)

  const formattedAmount = totalAmount.toLocaleString('en-BD')

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>{formattedAmount}</span>
      </h3>
    </div>
  )
}