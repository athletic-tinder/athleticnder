const mongoose = require('mongoose');
require('../configs/db.config');
const User = require('../models/user.model');

const users = [
  {
    "name" : "Open Graph Test User",
    "email" : "open_ltlokym_user@tfbnw.net",
    "image" : "https://www.fundacionuniversia.net/wp-content/uploads/2017/09/ironhack_logo.jpg",
    "social" : {
      "facebookId" : "105790010535415"
    },
    "age" : 34,
    "gender" : "hombre",
    "lookingFor" : "todos"
  },
  {
	"name" : "Carlos",
	"email" : "ofthetower.carlos@gmail.com",
	"image" : "https://www.fundacionuniversia.net/wp-content/uploads/2017/09/ironhack_logo.jpg",
	"social" : {
		"facebookId" : "10156131646518174"
	},
	"age" : 25,
	"gender" : "hombre",
	"lookingFor" : "mujer"
  },
  {
    "name" : "Moises",
    "email" : "garciap.moises@gmail.com",
    "image" : "https://www.fundacionuniversia.net/wp-content/uploads/2017/09/ironhack_logo.jpg",
    "social" : {
      "facebookId" : "10156131646518173"
    },
    "age" : 32,
    "gender" : "hombre",
    "lookingFor" : "mujer"
  },
  {
	"name" : "Verónica",
	"email" : "celemin.vero@gmail.com",
	"image" : "https://www.fundacionuniversia.net/wp-content/uploads/2017/09/ironhack_logo.jpg",
	"social" : {
		"facebookId" : "10156131646518172"
	},
	"age" : 24,
	"gender" : "mujer",
	"lookingFor" : "hombre"
  },
  {
    "name" : "pepi",
    "email" : "pepi@tfbnw.net",
    "image" : "https://www.fundacionuniversia.net/wp-content/uploads/2017/09/ironhack_logo.jpg",
    "social" : {
      "facebookId" : "105790010535485"
    },
    "age" : 26,
    "gender" : "mujer",
    "lookingFor" : "hombre"
  },
  {
    "name" : "Loca",
    "email" : "loca@tfbnw.net",
    "image" : "https://www.fundacionuniversia.net/wp-content/uploads/2017/09/ironhack_logo.jpg",
    "social" : {
      "facebookId" : "105790010535475"
    },
    "age" : 34,
    "gender" : "mujer",
    "lookingFor" : "todos"
  },
  {
    "name" : "Manuel",
    "email" : "manuel@tfbnw.net",
    "image" : "https://www.fundacionuniversia.net/wp-content/uploads/2017/09/ironhack_logo.jpg",
    "social" : {
      "facebookId" : "105790010535495"
    },
    "age" : 34,
    "gender" : "hombre",
    "lookingFor" : "todos"
  }
];
User.create(users)
  .then(() => {
    console.info("Seeds success:", users);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error("Seeds error:", users);
    mongoose.connection.close();
  });
//   console.log("OK");

// latch.unpair("LVTkndDMW3zWMzg9gPHJeptmHZhpEnEw9igzngQFCKMFQfLtfBQtnsmmJHpMkXad", function() {
//   console.log("OK");
// });