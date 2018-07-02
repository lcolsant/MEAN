import { Product } from '../product';

export const PRODUCTS: Product[] = [

  {
    id:randomID(),
    title:"Car",
    price:10000,
    imgUrl:null
  },

  {
    id:randomID(),
    title:"Skateboard",
    price:90,
    imgUrl:null
  },

  {
    id:randomID(),
    title:"Bike",
    price:250,
    imgUrl:null
  },

  {
    id:randomID(),
    title:"Computer",
    price:850,
    imgUrl:null
  }

];


function randomID() {
    return Math.floor(Math.random()*1000)+1;
}
