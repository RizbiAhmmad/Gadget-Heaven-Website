import React, { useEffect, useState } from 'react';
import Gadget from './Gadget';

const Gadgets = () => {

    const [gadgets, setGadgets]= useState([])
     
    useEffect(()=> {
        fetch('./ProductData.json')
    .then(response => response.json())
    .then(data => setGadgets(data))

    }, [])
    return (
        <div className='mt-52'>
            {/* <h2 className=" text-4xl text-center">Explore Cutting-Edge Gadgets</h2>
            <p>Gadgets:{gadgets.length}</p> */}

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget> )
                }
            </div>
        </div>
    );
};

export default Gadgets;