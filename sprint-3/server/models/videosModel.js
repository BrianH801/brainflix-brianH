const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const videosFile = path.join(__dirname, '../db/videos.json');

function Video(title, description) {
  this.id = uuidv4();
  this.title = title;
  this.description = description;
}
// list products array data from json file
function list() {
  const data = fs.readFileSync(videosFile);
  return JSON.parse(data);
}

function add(data) {
  const videosArr = list();
  const video = new Video(data.title, data.description);
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
  videosArr.splice(videosIndex, 1, {
    id: id,
    title: data.title,
    channel: 'Red Cow',
    image: 'https://i.imgur.com/l2Xfgpl.jpg',
    description: data.description,
    views: '0',
    likes: '0',
    duration: '4:01',
    video: 'https://project-2-api.herokuapp.com/stream',
    comments: [],
  });
  fs.writeFileSync(videosFile, JSON.stringify(videosArr));
  return videosArr;
}

module.exports = { list, add, getByID, deleteVideo, updateVideo };
