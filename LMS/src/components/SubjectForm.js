import React, { useState } from 'react';
import { createSubject } from '../services/subjectService';

const SubjectForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [bgImage, setBgImage] = useState('');
  const [route, setRoute] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const subjectData = { title, description, bgImage, route };

    try {
      await createSubject(subjectData);
      alert('Subject created successfully!');
      setTitle('');
      setDescription('');
      setBgImage('');
      setRoute('');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Create Subject</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Background Image URL</label>
          <input
            type="text"
            value={bgImage}
            onChange={(e) => setBgImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Route</label>
          <input
            type="text"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Subject</button>
      </form>
    </div>
  );
};

export default SubjectForm;
