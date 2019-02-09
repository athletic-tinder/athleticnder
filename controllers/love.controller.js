const Relationship = require('../models/relationship.model');

module.exports.handleMatch = (req, res, next) => {
  const owner = req.user.id;
  const interested = req.params.id;
  const query = {users: { $all: [owner, interested] } }
  
  createRelation(owner, interested);
  
  Relationship.findOne(query)
    .then(relationship => {
      console.log('ENTRA AQUI--->', relationship)
      if (isRejectRelation()){
        res.redirect('/matcheaks');
      } else if (relationship && relationship.status === 'pending'){
        updateRelation(relationship);
      } else if (!relationship) {
        createRelation();
      }
  })
  .catch(error => next(error))
}


function isRejectRelation(relationship) {
  if (relationship.status === 'rejected' )
    return true;
}

function updateRelation(relationship) {
  relationship.status = 'love';
  relationship.save()
    .then(() => res.redirect('/matcheaks'))
    .catch(error => next(error)) 
}

function createRelation(owner, interested) {
  const obj = {
    users: [owner,interested],
    status: req.body.match === 'next' ? 'rejected' : 'pending'
  }
  const newRelationship = new Relationship(obj);

  newRelationship.save()
    .then(() => res.redirect('/matcheaks'))
    .catch(error => next(error))
}.bind();