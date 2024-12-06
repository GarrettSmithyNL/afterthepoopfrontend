import './SellPanel.css'

const SellPanel = () => {
    return (
        <div className={'sellPanel'}>
            <h3>Sell Fertilizer</h3>
            <form className={'sellForm'}>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Product Name:</label>
                    <input type={'text'} className={'sellText'}/>
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Phosphorus %:</label>
                    <input type={'text'} className={'sellText'}/>
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Nitrogen %:</label>
                    <input type={'text'} className={'sellText'}/>
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Potasium %:</label>
                    <input type={'text'} className={'sellText'}/>
                </div>
                <div className={'inputHolder'}>
                    <label className={'sellLabel'}>Product Price:</label>
                    <input type={'text'} className={'sellText'}/>
                </div>
                <input type={'submit'} value={'Post Listing'} className={'sellButton'} />
            </form>
        </div>
    );
}

export default SellPanel;