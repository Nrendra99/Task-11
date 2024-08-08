Task_11> db.Items.find({ product_price: { $gte: 400, $lte: 800 } })
[
  {
    _id: ObjectId('66b4b8e17e4f1e3c033e5f0d'),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('66b4b8e17e4f1e3c033e5f0f'),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId('66b4b8e17e4f1e3c033e5f10'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId('66b4b8e17e4f1e3c033e5f12'),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId('66b4b8e17e4f1e3c033e5f13'),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  }
]