const mongoose = require('mongoose');
require('../configs/db.config');
const Relationships = require('../models/relationship.model');

const relationship = [
{
  "user": {
    0 : 'ObjectId:("5c61d2935bbd55abb49039aa")',
    1 : 'ObjectId:("5c61d2935bbd55abb49039ac")'
  },
"status": "matched"
},
{
  "user": {
    0 : "ObjectId:(5c61d2935bbd55abb49039ad)",
    1 : "ObjectId:(5c61d2935bbd55abb49039aa)"
  },
"status": "rejected"
},
{
  "user": {
    "0" : "ObjectId:(5c61d2935bbd55abb49039aa)",
    "1" : "ObjectId:(5c61d2935bbd55abb49039bb)"
  },
"status": "rejected"
},
{
  "user": {
    "0" : "ObjectId:()",
    "1" : "ObjectId:(5c61d2935bbd55abb49039aa)"
  },
"status": "matched"
},
{
  "user": {
    "0" : "ObjectId:(5c61d2935bbd55abb49039aa)",
    "1" : "ObjectId:()"
  },
"status": "matched"
},
{
  "user": {
    "0" : "ObjectId:(5c61d2935bbd55abb49039aa)",
    "1" : "ObjectId:()"
  },
"status": "rejected"
},

];

Relationships.create(relationship)
  .then(() => {
    console.info("SeedsRelation success:", relationship);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error("SeedsRelation error:", relationship);
    mongoose.connection.close();
  });