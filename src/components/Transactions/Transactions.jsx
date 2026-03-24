import { useDispatch, useSelector } from 'react-redux'
import Transaction from './Transaction'
import { useEffect } from 'react'
import {fetchTransactions} from '../../features/transactions/transactionSlice'


export default function Transactions() {
  const {transactions, isLoading, isError, error} = useSelector((state) => state.transaction)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTransactions())
  }, [dispatch])

  console.log('transactions :>> ', transactions);

  let content = '';

  if(isLoading) {
    content = <li>Loading...</li>;
  }

  if(!isLoading && isError) {
    content = <li>{error}</li>
  }

  if (!isError && !isLoading && transactions?.length === 0) {
    content = <li>No transactions found</li>
  }

  if (!isError && !isLoading && transactions?.length > 0) {
    content = transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>)
  }

  return (
    <div>
        <p className="second_heading">Your Transactions:</p>

        <div className="conatiner_of_list_of_transactions">
            <ul>
                {content}
            </ul>
        </div>
    </div>
  )
}
