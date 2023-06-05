const connection = require('../config/connection');
const { reactions, thought } = require('../models');
const { getRandomUser, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing reactionss
  await reactions.deleteMany({});

  // Drop existing thoughts
  await thought.deleteMany({});

  // Create empty array to hold the thoughts
  const thoughts = [];

  // Loop 20 times -- add thoughts to the thoughts array
  for (let i = 0; i < 20; i++) {

    const thoughts = getRandomThoughts(20);

    const userName = getRandom();
    const thought = fullName.split(' ')[0];
  

 // Assuming 'thoughts' is already defined as an array
thoughts.push({
  userName: 'John',
  thought: 'This is my thought.',
  reaction: 'Like',
});

  }

  // Add thoughts to the collection and await the results
  await thought.collection.insertMany(thoughts);

  // Add reactionss to the collection and await the results
  await reactions.collection.insertOne({
    reactionsName: 'UCLA',
    inPerson: false,
    thoughts: [...thoughts],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
