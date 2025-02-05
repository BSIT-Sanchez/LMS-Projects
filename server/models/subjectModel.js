import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  bgImage: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  }
},{ timestamps: true });


const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;
