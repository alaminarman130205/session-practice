import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'
import { toast } from 'react-toastify';


const Home = () => {
    const [players , setPlayers] = useState([]);
    const [search , setSearch] = useState("");
    const[cart, setCart] =useState([]);

    useEffect( () => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player));
    }, [search])

    const handleDelete = (id) => {
        const leftPlayer = cart.filter((pd) => pd.idPlayer !== id); 
        setCart(leftPlayer);
        toast('wow deleted');
    }

    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <input onChange={(e) => setSearch(e.target.value)} className='search-input' placeholder='search-player' type="text" />
                    <button className='btn-search'>search</button>
                    <div className="players-container">
                    <Players
                     players={players}
                     cart={cart}
                     setCart = {setCart}
                    ></Players>
                    </div>
                </div>
                <div className="right-side">
                   <div className="cart">
                    <h3>Added Player</h3>
                    <div className="cart-info-container">
                    {
                        cart?.map(p=><div className="cart-info">
                            <li>{p.strPlayer}</li>
                            <button 
                            onClick={() => handleDelete(p.idPlayer)}
                            className='delete-btn'>x</button>
                        </div>
                        
                        )
                    }
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;