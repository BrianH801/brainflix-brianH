const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const videosFile = path.join(__dirname, '../db/videos.json');

function Video(
  id,
  title,
  channel,
  image,
  description,
  views,
  likes,
  duration,
  video,
  timestamp,
  comments
) {
  this.id = id;
  this.title = title;
  this.channel = channel;
  this.image = image;
  this.description = description;
  this.views = views;
  this.likes = likes;
  this.duration = duration;
  this.video = video;
  this.timestamp = timestamp;
  this.comments = comments;
}
// list products array data from json file
function list() {
  const data = fs.readFileSync(videosFile);
  return JSON.parse(data);
}

function add(data) {
  const videosArr = list();
  const video = new Video(
    data.id,
    data.title,
    data.channel,
    data.image,
    data.description,
    data.views,
    data.likes,
    data.duration,
    data.video,
    data.timestamp,
    data.comments
  );
  videosArr.push(video);
  fs.writeFileSync(videosFile, JSON.stringify(videosArr));
  return videosArr;
}

function getByID(id) {
  const videosArr = list();
  return videosArr.filter((video) => video.id === id);
}

function deleteVideo(id, data) {
  const videosArr = list();
  const videosIndex = videosArr.videosIndex((video) => video.id === id);
  videosArr.splice(videosIndex, 1);
  fs.writeFileSync(videosFile, JSON.stringify(videosArr));
  return videosArr;
}

function updateVideo(id, data) {
  const videosArr = list();
  const videosIndex = videosArr.findIndex((video) => video.id === id);
  videosArr.splice(videosIndex, 1, {});
  fs.writeFileSync(videosFile, JSON.stringify(videosArr));
  return videosArr;
}

module.exports = { list, add, getByID, deleteVideo, updateVideo };
