const User = require('../models/user.model');
const Relationship = require('../models/relationship.model');

module.exports.profile = (req, res, next) => {
  res.render('profile/index');
}

module.exports.edit = (req, res, next) => {
  res.render('profile/edit');
}

module.exports.doEdit = (req, res, next) => {
  const updates = {
    name: req.body.name, 
    age: req.body.age,
    gender: req.body.gender,
    lookingFor: req.body.lookingFor
  } 

  User.findByIdAndUpdate(req.user._id, {$set: updates}, {new: true})
    .then(user => {
        if (user) {
          res.redirect('/matcheaks');
        } else {
          res.redirect('/');
        }
    })
    .catch (error => next(error));
    
}

Relationship.find( { status: 'reject' })
  .then(relation => {
    if (relation) {
      console.log ( "hay relacion");
    } else {
      console.log ( "no hay relacion");
    }
  })
  .catch (error => next(error));


module.exports.list = (req,res, next) => {
  const lookingFor = req.user.lookingFor;
  const userId = req.user.id;

  const query  = { 
     ...(lookingFor !== 'Todos' ? { gender: lookingFor } : null),
    _id: { $ne: userId }, 
    //no muestrame las relaciones rejected
    //muestrame las relaciones en las que no soy owner
  }
      // if (lookingFor !== "Todos"){
      //   query.gender = lookingFor;
      // }


  User.find(query)
    .then(users => {
      res.render('matcheaks',{ users });
    })
    .catch(error => next(error))
}



// module.exports.list = (req, res, next) => {
//   const lookingFor = req.user.lookingFor;
//   const userId = req.user.id;
//  // const unLoved = req.relationship.status //x REVISAR

//  //db.inventory.find( { 'instock.qty': { $lte: 20 } } )

//   const query  = { 
//     // ...(lookingFor !== 'Todos' ? { gender: lookingFor } : null),
//     // _id: { $ne: userId },
//    //'relationships._id': { $ne: userId }
//     //status: unLoved //REVISAR SI ES ES ASI LA QUERY
//   }

//   User.countDocuments(query)
//     .then(number => {
//         const randomNumber = Math.floor(Math.random() * number)
//         return User.find(query, null, {skip: randomNumber})
//         //return User.find(query, null, {skip: randomNumber})
//           //.populate('relationships')
//          // .limit(1)
//           .then(user => {
//             res.render('matcheaks',{ user });
//           });
//       })
//    .catch (error => next(error));
// }
