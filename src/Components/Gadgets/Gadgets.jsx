import React, { useEffect, useState } from 'react';

const Gadgets = () => {

    const [gadgets, setGadgets]= useState([])
     
    useEffect(()=> {
        fetch('./ProductData.json')
    .then(response => response.json())
    .then(data => setGadgets(data))

    }, [])
    return (
        <div className='mt-52 mx-6'>
            <h2 className=" text-4xl text-center">Explore Cutting-Edge Gadgets</h2>
            <p>Gadgets:{gadgets.length}</p>
        </div>
    );
};

export default Gadgets;