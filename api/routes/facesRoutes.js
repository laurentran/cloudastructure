'use strict';
module.exports = function(app) {
    
    var faces = require('../controllers/facesController');

    app.route('/personGroup/:personGroupId/person/:personId/face/:persistedFaceId')
        .delete(faces.delete_face);

    app.route('/personGroup/:personGroupId/person/:personId/personGroup2/:personGroupId2/person2/:personId2')
        .post(faces.assign_faces_to);
};