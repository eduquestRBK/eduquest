const Feedback = require('../DataBase/Models/Feedback.js')

const getAllFeedbacks = async (req, res) => {
  try {
    const { username, email, description, studentId, courseId } = req.body;
    const feedback = await Feedback.create({
      username,
      email,
      description,
      studentId,
      courseId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


  const createFeedback = async (req, res) => {
    try {
      const { username, email, description, studentId, courseId } = req.body;
      const feedback = await Feedback.create({
        username,
        email,
        description,
        studentId,
        courseId,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      res.status(201).json(feedback);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {createFeedback , getAllFeedbacks}



