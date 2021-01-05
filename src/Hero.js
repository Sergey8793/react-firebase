import React from 'react';
import Goods from './Goods';

const goods = [
    {"title" : "apple", "cost" : 300, "image" : "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-256.png"},
    {"title" : "pear", "cost" : 400, "image" : "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-256.png"},
  ];
  

const Hero = ( {handleLogout} ) => {

    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image}/>)}
            
        </section>
    );
};

export default Hero;