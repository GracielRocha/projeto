import React, {useState, useEffect} from 'react'
import CryptoTile from './CriptoTile'
import BuyForm from './BuyForm'
import Transactions from './Transactions'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import ltc from '../assets/ltc.png'

const Home = () => {
    const mainCointainer= {
        display : 'flex',
        flexDirection : 'row',
    }
    const cardsContainer = {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        aligContent : 'center',
        marginTop :'10%',
        paddingTop :'5%',
        paddingBottom :'5%',
        fontSize: '18px',
        border : '1px solid cadeblue',
        color: dimigray,
    }


    const tiles = [
        {id: 1,icon: btc, name: "btc", name: 'BTC',rate: 135000},
        {id: 2,icon: eth, name: "eth", name: 'ETH',rate: 75000},
        {id: 3,icon: ltc, name: "ltc", name: 'LTC',rate:250},
    ]
    const [selectedTile, 
        setSelectedTile] = useState(tiles[0])
        const handleSelect = (data) => {
            setSelectedTile(data)
        }
        const buildList = (list) => {

        }
    return (
        <div>
            <div>
                <div>
                    <div>
                        {
                            tiles.map((coin) => 
                            (
                                <CryptoTile
                                    key={coin.id}
                                    data={coin}
                                    onClick={handleSelect}
                                    selectedTile={coin.id===selectedTile.id}
                                    />
                                    )
                                )
                            }
                       </div>
                </div>
                <div className='forms-container'>
                    <BuyForm data={selectedTile} onPurchase={buildList}/>
                    <div>
                        <Transactions list={list} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home