const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  from: {
    type: String
  },
  to: {
    type: String
  },
  text:{
    type: String,
    max: 2000
  }
}, { timestamps: true });

const Message = mongoose.model('Message', schema);

module.exports = Message;


// var ChatSchema = new Schema({
//   sender : {
//       type : mongoose.Schema.Types.ObjectId,
//       ref : 'User'
//   },
//   messages : [
//       {
//           message : String,
//           meta : [
//               {
//                   user : {
//                       type : mongoose.Schema.Types.ObjectId,
//                       ref : 'User'
//                   },
//               }
//           ]
//       }
//   ],
//   is_group_message : { type : Boolean, default : false },
//   participants : [
//       {
//           user :  {
//               type : mongoose.Schema.Types.ObjectId,
//               ref : 'User'
//           },
//           delivered : Boolean,
//           read : Boolean,
//           last_seen : Date
//       }
//   ]
// });