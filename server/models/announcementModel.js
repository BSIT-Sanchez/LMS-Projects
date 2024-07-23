import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  userId: {
    type: String,
    
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  
  }
  
}, { timestamps: true });

const Announcement = mongoose.model("Announcement", announcementSchema);
export default Announcement;
