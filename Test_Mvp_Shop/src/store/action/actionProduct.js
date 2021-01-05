import Data from './../../Data.json'
import {
    RETURN_LIST,
    DELETE_ALL,
    ADD_NEW_PRODACT,
    DELET_ONE,
    READ_DATA
} from "./action_Types";


export const rData = (posts) => {
  
    return {
        type: RETURN_LIST,
        data: posts
    }
}
export const dData = (posts) => {
  
    return {
        type: DELETE_ALL,
        data: posts
    }
}

export const readData = (name, desc, cost, num,img) => {
 
    return {
        type: READ_DATA,
        data: Data
    }
}

export const addData = (name, desc, cost, num) => {
    const newProdact = {
        id: num,
        name: name,
        img: 'https://gstore.ua/content/images/25/apple-iphone-xr-64gb-yellow-53150311269661_small11.png',
        descrip: desc,
        cost: Number(cost),
    }

    return {
        type: ADD_NEW_PRODACT,
        data: newProdact
    }
}
export const deleteOneProduct = (id) =>{
    return{
        type: DELET_ONE,
        id
    }
}
