import multer from 'multer';

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "public/temp");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export default multer({ storage });
  
// const storage2 = multer.diskStorage({
//     destination : (req, file, cb) => {
//         cb(null, "public/temp")
//     },
//     filename : (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// })
