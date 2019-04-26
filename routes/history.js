/**
 * Created by Emir on 24/04/2019.
 */
var express = require('express');
var router = express.Router();
var HistoryService=require('../services/HistoryService');
router.post('/', HistoryService.submithistory);
router.put('/:id/addMsg', HistoryService.AddMsgs);
router.put('/:id/addScore', HistoryService.AddScore);
router.get('/ScoreStat', HistoryService.getScoreConversation);
router.get('/ScoreTime', HistoryService.getScoreConversationByTime);
router.get('/', HistoryService.getHistory);


module.exports = router;
