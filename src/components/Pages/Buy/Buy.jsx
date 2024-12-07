import './Buy.css'
import {NavBar} from "../../SubComponents/NavBar/NavBar";
import {Header} from "../../SubComponents/Header/Header";

// Need to add Filters.
// Need to add ability to buy an item.

export const Buy = () => {

    const numOfRows = 12
    ;

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
                        {Array.from({ length: numOfRows }).map((_, index) => (
                            <tr key={index}>
                                <td>Product Name</td>
                                <td>Company Name</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>
                                <td>8.99</td>
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

