//GET all users
db.users.find()
app.get('/api/users', (req, res) => {
    // Retrieve all users from the database
    // Example: use a User model and find() method
    User.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(500).json({ error: 'An error occurred while retrieving users' });
      });
  });
  

//GET a single user by its _id and populated thought and friend data



db.users.aggregate([
    {
      $match: { _id: ObjectId("123456789") }
    },
    {
      $lookup: {
        from: "thoughts",
        localField: "thoughts",
        foreignField: "_id",
        as: "populatedThoughts"
      }
    },
    {
      $lookup: {
        from: "friends",
        localField: "friends",
        foreignField: "_id",
        as: "populatedFriends"
      }
    }
  ])


  app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
  
    // Retrieve a single user by its _id and populate thought and friend data
    // Example: use a User model and findById() method with Mongoose population
    User.findById(userId)
      .populate('thoughts')
      .populate('friends')
      .exec()
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        res.json(user);
      })
      .catch(err => {
        res.status(500).json({ error: 'An error occurred while retrieving the user' });
      });
  });
  

  //POST a new user:

  db.users.insertOne({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "secretpassword"
  })

  app.post('/api/users', (req, res) => {
    const userData = req.body;
  
    // Create a new user in the database
    // Example: use a User model and create() method
    User.create(userData)
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.status(500).json({ error: 'An error occurred while creating the user' });
      });
  });

  
  app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
  
    // Update the user by its _id
    // Example: use a User model and findOneAndUpdate() method
    User.findOneAndUpdate({ _id: userId }, updatedUserData, { new: true })
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        res.json(user);
      })
      .catch(err => {
        res.status(500).json({ error: 'An error occurred while updating the user' });
      });
  });

  
  app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
  
    // Remove the user by its _id
    // Example: use a User model and deleteOne() method
    User.deleteOne({ _id: userId })
      .then(result => {
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        res.json({ message: 'User deleted successfully' });
      })
      .catch(err => {
        res.status(500).json({ error: 'An error occurred while deleting the user' });
      });
  });
  