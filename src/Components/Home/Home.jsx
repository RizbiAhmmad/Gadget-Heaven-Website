import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    useEffect(()=>{
        document.title = "Gadgets Haven | HOME";
    },[])
    return (
        <div>           
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;