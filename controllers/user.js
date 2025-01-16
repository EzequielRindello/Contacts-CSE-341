const mongodb = require("../data/database");
const ObjetId = require("mongodb").ObjectId;

// in collection we add the specific collection we want to use
// notice that we limit the find to 5 documents
const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("listingsAndReviews").find().limit(5);
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjetId(req.params.id);
  const result = await mongodb.getDatabase().db().collection("users").find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users[0]);
  });
};

module.exports = { getAll, getSingle };
