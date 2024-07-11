const Course = require('../DataBase/Models/Courses');
const {cloudinary} = require('../Cloudinary/Cloudinary.js');

async function createCourse(req, res) {
    try {
        const newCourse = await Course.create({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            content: req.body.content,
            note: req.body.note,
            image: req.body.image,
            instructorId: req.params.instructorId 
        });
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getAllCourses(req, res) {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getCourseById= async(req,res)=>{
    try {
        const course = await Course.findByPk(req.params.courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const uploadCourseImage = async (req, res) => {
    const { id } = req.params;
  
    try {
      const course = await Course.findByPk(id);
      if (!course) {
        return res.status(404).json({ message: 'course not found' });
      }
  
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        course.image = result.secure_url;
        await Course.save();
        res.status(200).json({ message: 'course image uploaded successfully',  });
      } else {
        res.status(400).json({ message: 'No image file uploaded' });
      }
    } catch (error) {
      console.error('Error uploading course image:', error);
      res.status(500).json({ message: 'Failed to upload course image' });
    }
  };

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    uploadCourseImage
};
