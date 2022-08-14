const connection = require('../config/connection');
const { User, Thought } = require('../models');

// Drops All users
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});
  await Thought.deleteMany({});

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
