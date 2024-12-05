export type ItemType = {
  name: string;
  unit: string;
  unitValue: number;
  buyCount: number;
  basePrice: number;
  fees: number;
  discount: number;
  imageUrl: string;
  stockCount: number;
  collection: string;
};

export const products: Array<ItemType> = [
  {
    name: 'Kirkland Signature Organic Coconut Water',
    unit: 'fl oz',
    unitValue: 14,
    buyCount: 6,
    basePrice: 13.59,
    fees: 0.30,
    discount: 0,
    imageUrl: 'https://bfasset.costco-static.com/U447IH35/as/5t49274xkch65w59pf968j5k/1518783__1psd?auto=webp&amp;format=jpg',
    stockCount: 6,
    collection: '',
  },
  {
    name: 'Jarritos, Variety Pack',
    unit: 'fl oz',
    unitValue: 17.7,
    buyCount: 24,
    basePrice: 27.99,
    fees: 1.20,
    discount: 5,
    imageUrl: 'https://bfasset.costco-static.com/U447IH35/as/pwbnxscqjc2bjkkw2ssc9q/1843725__1?auto=webp&amp;format=jpg',
    stockCount: 6,
    collection: 'Mexican',
  },
  {
    name: 'El Mexicano Queso Panela Cheese',
    unit: 'lbs',
    unitValue: 3,
    buyCount: 1,
    basePrice: 15.59,
    fees: 0,
    discount: 2.80,
    imageUrl: 'https://bfasset.costco-static.com/U447IH35/as/bmsv5rj4tj9k9zqsx8848pms/289476__1psd?auto=webp&amp;format=jpg',
    stockCount: 1,
    collection: 'Mexican',
  },
  {
    name: 'Bounty Advanced 2-Ply Paper Towels',
    unit: 'Select-A-Size Sheets',
    unitValue: 101,
    buyCount: 12,
    basePrice: 29.99,
    fees: 0,
    discount: 5.00,
    imageUrl: 'https://bfasset.costco-static.com/U447IH35/as/vpnnnmcrcx5xbg8tbg5tjt/1720981__1psd?auto=webp&amp;format=jpg',
    stockCount: 2,
    collection: 'Cleaning',
  },
  {
    name: 'Maintex Professional High Sudsing Liquid Dish Soap, Lemon Scent',
    unit: 'fl oz',
    unitValue: 160,
    buyCount: 2,
    basePrice: 25.99,
    fees: 0,
    discount: 4.20,
    imageUrl: 'https://bfasset.costco-static.com/U447IH35/as/hg9bjtzkk5npbfgjjf8sh4/1760075__1psd?auto=webp&amp;format=jpg',
    stockCount: 0,
    collection: 'Cleaning',
  },
];

export const collections = ['Mexican', 'Cleaning'];