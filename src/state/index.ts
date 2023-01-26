export type Action =
  | {
      type: 'add';
      name: string;
      quantity: number;
    }
  | {
      type: 'delete';
      name: string;
    };

type Product = {
  name: string;
  quantity: number;
  price: number;
  type: string;
};

export type Cart = {
  totalPrice: number;
  totalItems: number;
  products: Product[];
};

function getTotalPrice(products: Product[]): number {
  const totalPrice = products.reduce((acc, product) => {
    return product.price * product.quantity + acc;
  }, 0);
  return totalPrice;
}
function getTotalItems(products: Product[]): number {
  const totalPrice = products.reduce((acc, product) => {
    return product.quantity + acc;
  }, 0);
  return totalPrice;
}

export default function cartReducer(cart: Cart, action: Action): Cart | never {
  if (action.type === 'add') {
    const updatedProducts = cart.products.map((product) => {
      if (product.name === action.name) {
        return {
          ...product,
          quantity: action.quantity,
        };
      } else {
        return product;
      }
    });
    return {
      totalPrice: getTotalPrice(updatedProducts),
      totalItems: getTotalItems(updatedProducts),
      products: updatedProducts,
    };
  } else if (action.type === 'delete') {
    const updatedProducts = cart.products.filter(
      (product) => product.name !== action.name
    );
    return {
      totalPrice: getTotalPrice(updatedProducts),
      totalItems: getTotalItems(updatedProducts),
      products: updatedProducts,
    };
  } else {
    throw Error('Unknown action');
  }
}

const initialProducts = [
  {
    name: 'My Christmas pack',
    price: 71.20,
    quantity: 3,
    type: 'pack',
  },
  {
    name: 'Basic T-Shirt',
    price: 13.50,
    quantity: 1,
    type: 'product',
  },
  {
    name: 'Woman bottle',
    price: 36.50,
    quantity: 2,
    type: 'product',
  },
  {
    name: 'Unisex Short Sleeve T-Shirt',
    price: 24,
    quantity: 1,
    type: 'product',
  },
];

export const initialCart = {
  totalPrice: getTotalPrice(initialProducts),
  totalItems: getTotalItems(initialProducts),
  products: initialProducts,
};
