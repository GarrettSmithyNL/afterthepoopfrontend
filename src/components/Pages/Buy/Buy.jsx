import './Buy.css'
import {NavBar} from "../../SubComponents/NavBar/NavBar";
import {Header} from "../../SubComponents/Header/Header";
import { useEffect, useState } from "react";

// Need to add Filters.
// Need to add ability to buy an item.

export const Buy = () => {
    const [postings, setPostings] = useState([]);

    useEffect(() => {
        getPostings();
    }, [])

    const getPostings = async () => {
        const postingsFromServer = await fetchPostings();
        setPostings(postingsFromServer);
    }

    const fetchPostings = async () => {
        const res = await fetch('http://localhost:8080/fertilizer');
        return await res.json();
    }

    const buyProduct = async (index) => {
        let postingToBuy = postings[index];

        const postingId = postingToBuy.postingId;
        const sellerId = postingToBuy.sellerId;
        let buyerId = "TestUser1";
        const quantity = postingToBuy.quantity;

        const URL = 'http://localhost:8080/buy?postingId=' + postingId
            + '&sellerId=' + sellerId
            + '&buyerId=' + buyerId
            + '&quantity=' + quantity;

        const res = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        await getPostings();

        if (res.ok) {
            console.log(res.body);
            // alert('product bought');
        } else {
            alert('failed to buy');
        }
    }

    return (

        <div className={"buyPage"}>
            <Header />
            <NavBar />
            <div className={'buyBody'}>
                <div className={'buyFilters'}>
                    <p>This is for the filters</p>
                </div>
                <table className={'buyTable'}>
                    <thead>
                    <tr>
                        <th className={'nameColumn'}>Name</th>
                        <th className={'companyColumn'}>Company</th>
                        <th className={'pColumn'}>P%</th>
                        <th className={'nColumn'}>N%</th>
                        <th className={'kColumn'}>K%</th>
                        <th className={'quantityColumn'}>Quantity</th>
                        <th className={'priceColumn'}>Price $</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {postings.map((posting, index) => (
                            <tr key={index}>
                                <td>{posting['products'][0]['productName']}</td>
                                <td>{posting['sellerId']}</td>
                                <td>{posting['products'][0]['ppercent']}</td>
                                <td>{posting['products'][0]['npercent']}</td>
                                <td>{posting['products'][0]['kpercent']}</td>
                                <td>{posting['quantity']}</td>
                                <td>{posting["price"]}</td>
                                <td>
                                    <button className={'buyButton'} onClick={() => {buyProduct(index)}}>Buy Now</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

