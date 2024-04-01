const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Classic Rock',
  },
  {
    tag_name: 'Pop',
  },
  {
    tag_name: 'Blue',
  },
  {
    tag_name: 'Red',
  },
  {
    tag_name: 'Green',
  },
  {
    tag_name: 'White',
  },
  {
    tag_name: 'Gold',
  },
  {
    tag_name: 'Pop Culture',
  },
];

const seedTags = async () => {
  try {
    await Tag.bulkCreate(tagData);
    console.log('Tags seeded successfully');
  } catch (err) {
    console.error('Error seeding tags:', err);
  }
};

module.exports = seedTags;

