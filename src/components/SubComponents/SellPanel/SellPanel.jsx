import './SellPanel.css'
import {useState} from "react";

export const SellPanel = () => {

    const [product, setProduct] = useState({})
    const [posting, setPosting] = useState({});
    const URL = 'http://localhost:8080/fertilizer?sellerId='
    const userName = 'ExampleUser123'

    const createProduct = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduct(values => ({...values, [name]: value}));
    }

    const createPosting = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPosting(values => ({...values, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedPosting = {...posting, product};
        console.log(URL + userName);
        console.log(updatedPosting);

        const response = await fetch(URL + userName, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPosting)
        });

        if (response.ok) {
            alert('Posting was made.');
        } else {
            alert('Failed to post.');
        }
    }



    return (
        <div className={'sellPanel'}>
            <h3>Sell Fertilizer</h3>
            <form className={'sellForm'} onSubmit={handleSubmit}>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Product Name:</label>
                    <input
                        type={'text'}
                        name={'productName'}
                        value={product.productName || ''}
                        onChange={createProduct}
                        className={'sellText'}
                    />
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Descrption:</label>
                    <input
                        type={'text'}
                        name={'description'}
                        value={product.description || ''}
                        onChange={createProduct}
                        className={'sellText'}
                    />
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Potassium %:</label>
                    <input
                        type={'text'}
                        name={'kpercent'}
                        value={product.kpercent || ''}
                        onChange={createProduct}
                        className={'sellText'}
                    />
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Phosphorus %:</label>
                    <input
                        type={'text'}
                        name={'ppercent'}
                        value={product.ppercent || ''}
                        onChange={createProduct}
                        className={'sellText'}
                    />
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Nitrogen %:</label>
                    <input
                        type={'text'}
                        name={'npercent'}
                        value={product.npercent || ''}
                        onChange={createProduct}
                        className={'sellText'}
                    />
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Quantity:</label>
                    <input
                        type={'text'}
                        name={'quantity'}
                        value={posting.quantity || ''}
                        onChange={createPosting}
                        className={'sellText'}
                    />
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Product Price:</label>
                    <input
                        type={'text'}
                        name={'price'}
                        value={posting.price || ''}
                        onChange={createPosting}
                        className={'sellText'}
                    />
                </div>
                <input type={'submit'} value={'Post Listing'} className={'sellButton'}/>
            </form>
        </div>
    );
}
