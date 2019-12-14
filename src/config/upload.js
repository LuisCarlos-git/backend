const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..', 'uploads' ),
        fileName: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            

            callback(null, `${file.fieldname}-${Date.now()}${ext}`);
        },
    }),
};