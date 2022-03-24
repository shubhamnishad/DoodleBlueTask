import {
  DECREEMENT_QUANTITY,
  INCREEMENT_QUANTITY,
  TOTAL_AMOUNT,
  TOTAL_ITEMS,
} from './action';

const initialState = {
  cartData: [
    {
      id: 0,
      name: 'Guac de la Costa',
      detail: 'tortillas de mais,fruit de la passion,mango',
      price: 7,
      quantity: 0,
      day: 'Y',
      night: 'Y',
    },
    {
      id: 1,
      name: 'Chicharon y cerveza',
      detail: 'citrin verse/Corona sause',
      price: 10,
      quantity: 0,
      day: 'Y',
      night: 'N',
    },
    {
      id: 2,
      name: 'Chilitos Con',
      detail: 'pedrunas tempura',
      price: 15,
      quantity: 0,
      day: 'Y',
      night: 'Y',
    },
  ],
  totalItems: 0,
  totalAmount: 0,
};

const cartReducer = (istate = initialState, action) => {
  switch (action.type) {
    case INCREEMENT_QUANTITY:
      let key1 = action.payload.key;
      istate.cartData.map((item, i) => {
        if (i === key1 && item.quantity >= 0 && item.quantity < 20) {
          return {
            ...item,
            quantity: item.quantity++,
            totalPrice: item.price * item.quantity,
          };
        }
        return {...item};
      });
      return {...istate, ...action.payload};
    case DECREEMENT_QUANTITY:
      let key2 = action.payload.key;
      istate.cartData.map((item, i) => {
        if (i === key2 && item.quantity > 0 && item.quantity <= 20) {
          return {...item, quantity: item.quantity--};
        }
        return {...item};
      });
      return {...istate, ...action.payload};
    case TOTAL_ITEMS:
      return {...istate, totalItems: action.payload.totalItems};
    case TOTAL_AMOUNT:
      return {...istate, totalAmount: action.payload.totalAmount};
    default:
      return istate;
  }
};

export default cartReducer;
