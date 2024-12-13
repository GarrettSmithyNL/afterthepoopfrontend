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
        <div
            className="transactionPanel"
            style={{
                backgroundImage: `url(/images/backpanel.svg)`,
                backgroundSize: '1000px'
            }}
        >
            <h2>list of Transactions</h2>
            <div
                className="transactionBackground"
                style={{
                    backgroundImage: `url(/images/largepaper.svg)`,
                    backgroundSize: '900px',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <Link to={'/user'}>
                    <button className={'backButton'}>Back</button>
                </Link>
                <table className="transactionTable">
                    <thead>
                    <tr>
                        <th className={'idColumn'}>ID</th>
                        <th className={'sellerTransColumn'}>Seller</th>
                        <th className={'buyerColumn'}>Buyer</th>
                        <th className={'dateColumn'}>Date</th>
                        <th className={'prodNameColumn'}>Product Name</th>
                        <th className={'amountColumn'}>Amount<br/>(lbs)</th>
                        <th className={'priceTransColumn'}>Price<br/>($)</th>
                        <th className={'totalColumn'}>Total<br/>($)</th>
                    </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td className={'idColumn'}>{transaction['transactionId']}</td>
                                <td className={'sellerTransColumn'}>{transaction['sellerId']}</td>
                                <td className={'buyerColumn'}>{transaction['buyerId']}</td>
                                <td className={'dateColumn'}>{transaction['transactionDate']}</td>
                                <td className={'prodNameColumn'}>{transaction['posting']['product']['productName']}</td>
                                <td className={'amountColumn'}>{transaction['posting']['price']}</td>
                                <td className={'priceTransColumn'}>{transaction['quantityPurchased']}</td>
                                <td className={'totalColumn'}>{transaction['transactionAmount']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


