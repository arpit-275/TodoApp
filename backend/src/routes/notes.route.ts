import express from 'express';
import * as NotesController from '../controllers/notes.controller';

const router = express.Router();

router
  .route('/')
  .get(NotesController.getNotes)
  .post(NotesController.createNote);

router.get('/:noteId', NotesController.getNote);

export default router;
