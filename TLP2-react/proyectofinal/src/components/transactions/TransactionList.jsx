import { useGlobalState } from "../../context/GlobalState"

function TransactionList() {
    const {transactions} = useGlobalState()

  return (
    <div>Transactions.map(transaction => (
        <div>
            <p>{transaction.description}</p>
            <span>{transaction.amount}</span>
        </div>
    ))

    )</div>
  )
}

export default TransactionList
