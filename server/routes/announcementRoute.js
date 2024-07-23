import express from 'express';
import { verifyAdmin} from '../utils/verifyUser.js';
import { addAnnouncement, deleteAnnouncement, getSearchAllAnnouncement, updateAnnouncement } from '../controllers/announcementController.js';

const router = express.Router();

router.post('/addAnnouncement' ,verifyAdmin, addAnnouncement);
router.get('/getSearchAllAnnouncement', getSearchAllAnnouncement);
router.delete('/deleteAnnouncement/:announcementId/:userId', verifyAdmin, deleteAnnouncement);
router.put('/updateAnnouncement/:announcementId/:userId', verifyAdmin, updateAnnouncement);



export default router;