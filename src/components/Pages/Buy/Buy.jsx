import './Buy.css'
import {NavBar} from "../../SubComponents/NavBar/NavBar";
import {Header} from "../../SubComponents/Header/Header";
import { useEffect, useState } from "react";

// Need to add Filters.
// Need to add ability to buy an item.

export const Buy = () => {
    const [postings, setPostings] = useState([]);
    const [quantities, setQuantities] = useState([]);

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

    const changeQuantity = (index, event) => {
        const newQuantities = [...quantities];
        newQuantities[index] = event.target.value;
        setQuantities(newQuantities);
    }

    const buyProduct = async (index) => {
        let postingToBuy = postings[index];

        const postingId = postingToBuy.postingId;
        const sellerId = postingToBuy.sellerId;
        let buyerId = "TestUser1";

        const URL = 'http://localhost:8080/buy?postingId=' + postingId
            + '&sellerId=' + sellerId
            + '&buyerId=' + buyerId
            + '&quantity=' + quantities[index];

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
            <div
                className={'buyBody'}
                style={{
                    backgroundImage: `url(/images/backpanel.svg)`,
                    backgroundSize: '1000px'
                }}
            >
                <h2>Avalible Fertilizer</h2>
                <div
                    className="backgroundPic"
                    style={{
                        backgroundImage: `url(/images/largepaper.svg)`,
                        backgroundSize: '900px',
                        backgroundRepeat: 'no-repeat'
                    }}
                >

                    <table className={'buyTable'}>
                        <thead className={'headerRow'}>
                        <tr >
                            <th className={'nameColumn'}>Name</th>
                            <th className={'companyColumn'}>Seller</th>
                            <th className={'pColumn'}>P%</th>
                            <th className={'nColumn'}>N%</th>
                            <th className={'kColumn'}>K%</th>
                            <th className={'quantityColumn'}>Quantity</th>
                            <th className={'priceColumn'}>Price $</th>
                            <th className={'buyColumn'}>Buy</th>
                        </tr>
                        </thead>
                        <tbody>
                        {postings.map((posting, index) => (
                            <tr key={index}>
                                <td className={'nameColumn'}>{posting['product']['productName']}</td>
                                <td className={'companyColumn'}>{posting['sellerId']}</td>
                                <td className={'pColumn'}>{posting['product']['ppercent']}</td>
                                <td className={'nColumn'}>{posting['product']['npercent']}</td>
                                <td className={'kColumn'}>{posting['product']['kpercent']}</td>
                                <td className={'quantityColumn'}>{posting['quantity']}</td>
                                <td className={'priceColumn'}>{posting["price"]}</td>
                                <td className={'buyColumn'}>
                                    <input
                                        type="number"
                                        className={'buyInput'}
                                        min="1"
                                        max={posting['quantity']}
                                        value={quantities[index] || ''}
                                        onChange={(e) => {
                                            changeQuantity(index, e);
                                        }}
                                    />
                                    <button className={'buyButton'} onClick={() => {
                                        buyProduct(index);
                                    }}>
                                        Buy
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

