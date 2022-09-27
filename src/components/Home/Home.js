import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    const [players , setPlayers] = useState([]);
    const [search , setSearch] = useState("");

    useEffect( () => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=mess')
        .then(res => res.json())
        .then(data => setPlayers(data?.player));
    }, [search])
    // console.log(players)


    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <input onChange={(e) => setSearch(e.target.value)} className='search-input' placeholder='search-player' type="text" />
                    <button className='btn-search'>search</button>
                    <div className="players-container">
                    <Players players={players}></Players>
                    </div>
                </div>
                <div className="right-side">
                   <div className="cart">
                    <p>this is player cart</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;