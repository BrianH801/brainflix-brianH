const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.get('/', videoController.listVideos);
router.post('/', videoController.addVideo);
router.post('/:id', videoController.getVideosByID);
router.put('/:id', videoController.updateVideo);
router.delete('/:id', videoController.deleteVideo);

module.exports = router;
