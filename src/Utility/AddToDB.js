import { toast } from "react-toastify";

const getStoredCartList =() =>{

    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }

    else{
        return [];
    }

}

const addToStoredCartList =(id) =>{
const storedList = getStoredCartList();

if (storedList.includes(id)){
    // console.log(id, 'Already exist in cart');
    toast ('This product already exist in cart')
}
else{
    storedList.push(id);
    console.log(id, 'Added to cart');

    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('cart-list', storedListStr);

    toast ('This product added your cart successfully')
}
};

export {addToStoredCartList, getStoredCartList}



// wishlist

const getStoredWishList =() =>{

    const storedListStr = localStorage.getItem('Wish-list');
    if (storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }

    else{
        return [];
    }

};

const addToStoredWishList =(id) =>{
const storedList = getStoredWishList();

if (storedList.includes(id)){
    // console.log(id, 'Already exist in wishlist');
    toast ('This product already exist in wishlist')
}
else{
    storedList.push(id);
    // console.log(id, 'Added to wishlist');
    toast ('This product added your wishlist successfully')

    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('Wish-list', storedListStr);
}
};

export {addToStoredWishList, getStoredWishList}
