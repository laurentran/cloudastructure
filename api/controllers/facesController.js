'use strict';

var request = require("request");
var dotenv = require("dotenv");

dotenv.load();

const api_key = process.env.FACE_API_KEY;

exports.delete_face = function(req, res) {
    var api_url = "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/" + req.params.personGroupId + "/persons/" + req.params.personId + "/persistedFaces/" + req.params.persistedFaceId;
    console.log(api_url);
    request.delete({
        headers: {'content-type' : 'application/json', 'Ocp-Apim-Subscription-Key' : api_key},
        url: api_url,
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.body);
            res.json({ message: 'Face successfully deleted' });
        }
    });
};

// merge operation to assign faces from person 1 to person 2
exports.assign_faces_to = function(req, res) {
    // get face ids from person 1
    get_person_faces(req, res, function(result){
        var numFaces = result.length;
        //TODO: add faces from person 1 to person 2
        for(var i = 0; i < numFaces; i++) {

        }
        //TODO: delete person 1
    });
};


var get_person_faces = function(req, res, next) {
    var api_url = "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/" + req.params.personGroupId + "/persons/" + req.params.personId;
    request.get({
        headers: {'content-type' : 'application/json', 'Ocp-Apim-Subscription-Key' : api_key},
        url: api_url,
    }, function(error, response, body){
        var result;
        if(error) {
            console.log(error);
        } else {
            result = JSON.parse(body).persistedFaceIds;
            res.json(result);
        }
        next(result);
    });
};
