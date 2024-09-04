const express = require('express');
const connectDatabase = require('./database');
const partnerRoutes = require('./partnerRoute.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Initialize the database and start the server
connectDatabase().then(connection => {
  console.log('Database connected successfully!');

  // Example route: Fetch all users
  app.get('/users', async (req, res) => {
    const userRepository = connection.getRepository(User);
    try {
      const users = await userRepository.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });



  app.use('/api', partnerRoutes);

  

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('Failed to connect to the database:', error);
});
