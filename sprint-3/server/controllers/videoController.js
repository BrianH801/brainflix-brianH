const videos = require('../models/videosModel');

function listVideos(_req, res) {
  res.json(videos.list());
}

function getVideosByID(req, res) {
  res.json(viseos.getByID(req.params.id));
}

function addVideo(req, res) {
  console.log(req.body);
  if (
    !req.body.id ||
    !req.body.title ||
    !req.body.channel ||
    !req.body.image ||
    !req.body.description ||
    !req.body.views ||
    !req.body.likes ||
    !req.body.duration ||
    !req.body.video ||
    !req.body.timestamp ||
    !req.body.comments
  ) {
    res.status(400).json({
      error: 'POST body must contain all requiredProperties',
      requiredProperties: [
        'id',
        'title',
        'channel',
        'image',
        'description',
        'views',
        'likes',
        'duration',
        'video',
        'timestamp',
        'comments',
      ],
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
