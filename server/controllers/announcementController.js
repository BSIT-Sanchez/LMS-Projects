
import Announcement from "../models/announcementModel.js";
import { errorHandler } from "../utils/error.js"

export const addAnnouncement = async (req, res, next) => {
  if(req.user.role !== "admin"){
    return next(errorHandler(403, 'You are not allowed to create an Announcement'))
  }

  const newAnnouncement = new Announcement({
    ...req.body,
    userId: req.user.id
  })
  try{
    const saveAnnouncement = await newAnnouncement.save();
    res.status(201).json(saveAnnouncement);

  }catch(error){
    next(error);
  }
};

export const getSearchAllAnnouncement = async (req, res, next) => {
  try{
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit =  parseInt(req.query.limit) || 9 ;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const announcement = await Announcement.find({
      ...(req.query.userId && { userId: req.query. userId}),
      ...(req.query.announcementId && { _id: req.query.announcementId}),
      ...(req.query.title && { title: req.query.title}),


    }).sort({ updateAt: sortDirection}).skip(startIndex).limit(limit);

    const totalAnnouncement = await Announcement.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthAnnouncement = await Announcement.countDocuments({
      createdAt: { $gte: oneMonthAgo},

    })
    res.status(200).json({
      announcement,
      totalAnnouncement,
      lastMonthAnnouncement
    })

  }catch(error){
    next(error);
  }
};

export const deleteAnnouncement = async (req, res, next) => {
  if (req.user.role !== "admin" || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this announcement'));
  }

  try {
    await Announcement.findByIdAndDelete(req.params.announcementId);
    res.status(200).json({ message: 'This announcement has been deleted' });
  } catch (error) {
    next(error);
  }
};

export const updateAnnouncement = async (req, res, next) => {
  if (req.user.role !== "admin" || req.user.id !== req.params.userId) {
    return res.status(403).json({ message: 'You are not allowed to update this announcement' });
  }

  try {
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.announcementId,
      {
        $set: {
          title: req.body.title,
          image: req.body.image,
        },
      },
      { new: true }
    );
    if (!updatedAnnouncement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.status(200).json(updatedAnnouncement);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
