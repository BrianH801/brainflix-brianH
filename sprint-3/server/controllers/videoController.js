const videos = require('../models/videosModel');

function listVideos(_req, res) {
  res.json(videos.list());
}

function getVideosByID(req, res) {
  res.json(viseos.getByID(req.params.id));
}

function addVideo(req, res) {
  console.log(req.body);
  if (!req.body.title || !req.body.description) {
    res.status(400).json({
      error: 'POST body must contain all requiredProperties',
      requiredProperties: ['title', 'description'],
    });
  }
  res.json(videos.add(req.body));
}

function deleteVideo(req, res) {
  res.json(videos.deleteVideo(req.params.id));
}

function updateVideo(req, res) {
  res.json(videos.updateVideo(req.params.id, req.body));
}

module.exports = {
  listVideos,
  addVideo,
  getVideosByID,
  deleteVideo,
  updateVideo,
};
