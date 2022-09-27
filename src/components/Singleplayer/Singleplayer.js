import React from 'react';
import'./Singleplayer.css'

const Singleplayer = ({player}) => {
    console.log(player)
    return (
        <div>
            <h1>i am from single players{player.idPlayer}</h1>
        </div>
    );
};

export default Singleplayer;