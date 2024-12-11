import './UserTransaction.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const UserTransaction = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions();
        console.log(transactions);
    }, [])

    const getTransactions = async () => {
        const trasactionsFromServer = await fetchTransactions();
        setTransactions(trasactionsFromServer);
    }

    const fetchTransactions = async () => {
        const res = await fetch("http://localhost:8080/buy");
        return await res.json();
    }

    return (
        <div className="transactionPanel">
            <Link to={'/user'}>
                <button>Back</button>
            </Link>
            <div className="transactionFilter">
                <h3>This is the filters for the transactions</h3>
            </div>
            <h3>List of Transactions</h3>
            <table className="transactionTable">
                <thead>
                <tr>
                    <th id={'idColumn'}>ID</th>
                    <th id={'sellerColumn'}>Seller</th>
                    <th id={'buyerColumn'}>Buyer</th>
                    <th id={'dateColumn'}>Date</th>
                    <th id={'prodNameColumn'}>Product Name</th>
                    <th id={'amountColumn'}>Amount<br/>(lbs)</th>
                    <th id={'priceColumn'}>Price<br/>($)</th>
                    <th id={'totalColumn'}>Total<br/>($)</th>
                </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction['transactionId']}</td>
                            <td>{transaction['sellerId']}</td>
                            <td>{transaction['buyerId']}</td>
                            <td>{transaction['transactionDate']}</td>
                            <td>{transaction['posting']['product']['productName']}</td>
                            <td>{transaction['posting']['price']}</td>
                            <td>{transaction['quantityPurchased']}</td>
                            <td>{transaction['transactionAmount']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


