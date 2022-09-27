import React from 'react';
import Singleplayer from '../Singleplayer/Singleplayer';
import './Players.css'

const Players = ({players, cart, setCart}) => {
    return (
        <div>
            <div className="cart-container">
            {
                players.map((player) =>(<Singleplayer 
                    player={player} 
                    key={player?.idPlayer}
                    cart={cart}
                    setCart = {setCart}
                    ></Singleplayer>))
            }
            </div>
        </div>
    );
};

export default Players;