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

// assign faces from person 1 to person 2
exports.assign_faces_to = function(req, res) {
    var personGroupId = req.params.personGroupId;
    var personGroupId2 = req.params.personGroupId2;
    var personId = req.params.personId;
    var personId2 = req.params.personId2;

    //TODO
};

exports.get_person_faces = function(req, res) {
    var api_url = "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/" + req.params.personGroupId + "/persons/" + req.params.personId;
    request.get({
        headers: {'content-type' : 'application/json', 'Ocp-Apim-Subscription-Key' : api_key},
        url: api_url,
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            res.json(JSON.parse(body).persistedFaceIds);
        }
    });
};

exports.list_all_persons = function(req, res) {
    var api_url = "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/" + req.params.personGroupId + "/persons";
    request.get({
        headers: {'content-type' : 'application/json', 'Ocp-Apim-Subscription-Key' : api_key},
        url: api_url,
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.body);
            res.json(response.body);
        }
    });
};