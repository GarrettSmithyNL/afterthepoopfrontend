import './UserTransaction.css'
import {Link} from "react-router-dom";

export const UserTransaction = () => {
    const numOfRows = 10;

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
                {Array.from({length: numOfRows}).map((_, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>Buyer</td>
                        <td>Seller</td>
                        <td>01/01/2022</td>
                        <td>Fertilizer Name</td>
                        <td>100</td>
                        <td>8.99</td>
                        <td>899.00</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}


