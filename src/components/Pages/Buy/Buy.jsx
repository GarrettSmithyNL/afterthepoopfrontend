import './Buy.css'
import {NavBar} from "../../SubComponents/NavBar/NavBar";
import {Header} from "../../SubComponents/Header/Header";
import { useEffect, useState } from "react";

// Need to add Filters.
// Need to add ability to buy an item.

export const Buy = () => {
    const [postings, setPostings] = useState([]);

    useEffect(() => {
        const getPostings = async () => {
            const postingsFromServer = await fetchPostings();
            setPostings(postingsFromServer);
        }
        getPostings();
    }, [])

    const fetchPostings = async () => {
        const res = await fetch('http://localhost:8080/fertilizer');
        return await res.json();
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
                            <th className={'pColumn'}>N%</th>
                            <th className={'pColumn'}>K%</th>
                            <th className={'pColumn'}>Price $</th>
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
                                <td>{posting["price"]}</td>
                                <td>
                                    <button className={'buyButton'}>Buy Now</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

