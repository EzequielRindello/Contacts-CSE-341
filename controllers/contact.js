const mongodb = require("../data/database");
const ObjetId = require("mongodb").ObjectId;

// in collection we add the specific collection we want to use
// notice that we limit the find to 5 documents
// GET method
const getAll = async (req, res) => {
  //#swagger.tags = ['Contacts']
  const result = await mongodb.getDatabase().db().collection("contacts").find();
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  });
};

// GET method (single contact)
const getSingle = async (req, res) => {
  //#swagger.tags = ['Contacts']
  const userId = new ObjetId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users[0]);
  });
};

// POST method
const addContact = async (req, res) => {
  //#swagger.tags = ['Contacts']
  const newContact = {
    firstName: req.body.firstName, // Corregido
    lastName: req.body.lastName,
    favouriteColor: req.body.favouriteColor,
    birthday: req.body.birthday,
  };
  try {
    const result = await mongodb
      .getDatabase()
      .db()
      .collection("contacts")
      .insertOne(newContact);

    if (result.insertedCount === 0) {
      res.status(404).send("Failed to add contact");
    } else {
      res.status(201).send("Contact added successfully");
    }
  } catch (error) {
    res.status(500).send("An error occurred while adding the contact");
  }
};

// PUT method
const updateContact = async (req, res) => {
  //#swagger.tags = ['Contacts']
  const userId = new ObjetId(req.params.id);
  const updatedContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    favouriteColor: req.body.favouriteColor,
    birthday: req.body.birthday,
  };
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .updateOne({ _id: userId }, { $set: updatedContact });
  if (result.modifiedCount === 0) {
    res.status(404).send("Contact not found");
  } else {
    res.status(200).send("Contact updated");
  }
};

// DELETE method
const deleteContact = async (req, res) => {
  //#swagger.tags = ['Contacts']
  const userId = new ObjetId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .deleteOne({ _id: userId });
  if (result.modifiedCount === 0) {
    res.status(404).send("Contact not found");
  } else {
    res.status(200).send("Contact updated");
  }
};

module.exports = {
  getAll,
  getSingle,
  addContact,
  updateContact,
  deleteContact,
};
