import Subject from '../models/subjectModel.js';

// Create a new subject
export const createSubject = async (req, res) => {
  try {
    const { title, description, bgImage, route } = req.body;
    const newSubject = new Subject({ title, description, bgImage, route });
    await newSubject.save();
    res.status(201).json({ message: 'Subject created successfully', subject: newSubject });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subject', error: error.message });
  }
};

// Get all subjects
export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subjects', error: error.message });
  }
};

// Get a subject by ID
export const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).json({ message: 'Subject not found' });
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subject', error: error.message });
  }
};

// Update a subject
export const updateSubject = async (req, res) => {
  try {
    const { title, description, bgImage, route } = req.body;
    const updatedSubject = await Subject.findByIdAndUpdate(
      req.params.id,
      { title, description, bgImage, route },
      { new: true }
    );
    if (!updatedSubject) return res.status(404).json({ message: 'Subject not found' });
    res.status(200).json({ message: 'Subject updated successfully', subject: updatedSubject });
  } catch (error) {
    res.status(500).json({ message: 'Error updating subject', error: error.message });
  }
};

// Delete a subject
export const deleteSubject = async (req, res) => {
  try {
    const deletedSubject = await Subject.findByIdAndDelete(req.params.id);
    if (!deletedSubject) return res.status(404).json({ message: 'Subject not found' });
    res.status(200).json({ message: 'Subject deleted successfully', subject: deletedSubject });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting subject', error: error.message });
  }
};
