const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Tops',
  },
  {
    category_name: 'Bottoms',
  },
  {
    category_name: 'Accessories',
  },
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Books',
  },
];

const seedCategories = async () => {
  try {
    await Category.bulkCreate(categoryData);
    console.log('Categories seeded successfully');
  } catch (err) {
    console.error('Error seeding categories:', err);
  }
};

module.exports = seedCategories;
