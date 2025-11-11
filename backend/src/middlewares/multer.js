import multer from "multer";

// Set up multer storage configuration
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Initialize multer with the defined storage configuration
const upload = multer({ storage: storage });

export default upload;
