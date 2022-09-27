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
    const handleBookmark = () =>{
        const info = {
            strPlayer, 
            idPlayer, 
            quantity: 115,
            bookmark:"true",
        };
        const prevBookmark = localStorage.getItem("bookmark");
        const oldbookmark= JSON.parse(prevBookmark)
        if(oldbookmark){
            const isExist = oldbookmark.find((p)=>p.idPlayer === idPlayer); 
            if(isExist){
                const updatedPrice = parseFloat(isExist.quantity);
                const newupdatedPrice = updatedPrice + 1; 
                isExist.quantity = newupdatedPrice; 
                localStorage.setItem(
                    "bookmark", 
                    JSON.stringify([...oldbookmark, isExist])
                )

            }else{
                localStorage.setItem("bookmark", JSON.stringify([...oldbookmark ,info]));
            }
        }else{
            localStorage.setItem("bookmark", JSON.stringify([info]));
        }
    };

 

    return (
        <div className='card' data-aos="zoom-in">
           <img className='player-img' src={strCutout} alt="" />
           <h6>{strPlayer}</h6>
           <button className='card-btn'>details</button>
           <button onClick={handleAddtocart} className='card-btn'>add to cart</button>
           <button onClick={handleBookmark} className='card-btn'>bookmark</button>
           
        </div>
    );
};

export default Singleplayer;