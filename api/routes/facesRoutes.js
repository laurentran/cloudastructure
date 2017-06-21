'use strict';
module.exports = function(app) {
    
    var faces = require('../controllers/facesController');

    app.route('/personGroup/:personGroupId')
        .get(faces.list_all_persons);

    app.route('/personGroup/:personGroupId/person/:personId/face/:persistedFaceId')
        .delete(faces.delete_face);

    app.route('/personGroup/:personGroupId/person/:personId/personGroup2/:personGroupId2/person2/:personId2')
        .post(faces.assign_faces_to);

    app.route('/personGroup/:personGroupId/person/:personId')
        .get(faces.get_person_faces);
};