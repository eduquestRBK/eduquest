const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: 'dduvvnnjl',
  api_key: '695561934631413',
  api_secret: 'dwTs6YzFOzCldZGn1AhhQKOkRYk'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'instructors',  
    allowed_formats: ['jpg', 'jpeg', 'png']
  }
});

module.exports = { cloudinary, storage };
