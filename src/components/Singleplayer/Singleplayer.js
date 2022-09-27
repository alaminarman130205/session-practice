import React from 'react';
import'./Singleplayer.css'

const Singleplayer = ({player, cart, setCart}) => {
    const {  idPlayer ,strPlayer, strCutout} = player;
    const handleAddtocart = () =>{
        const info = {
            strPlayer, 
            idPlayer, 
            price: 115,

        };
        if(cart){
            const newPlayer= [...cart, info];
            setCart(newPlayer)
        }
    };
    return (
        <div className='card'>
           <img className='player-img' src={strCutout} alt="" />
           <h6>{strPlayer}</h6>
           <button className='card-btn'>details</button>
           <button onClick={handleAddtocart} className='card-btn'>add to cart</button>
           <button className='card-btn'>bookmark</button>
           
        </div>
    );
};

export default Singleplayer;