import { RequestHandler } from 'express';
import createHttpError from 'http-errors';
import { v4 as uuidv4 } from 'uuid';
import { NoteInstance } from '../models/notes.model';

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteInstance.findAll({ where: {} });
    return res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;

  try {
    const note = await NoteInstance.findOne({ where: { id: noteId } });

    if (!note) {
      throw createHttpError(404, 'Note not found');
    }

    return res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

interface CreateNoteBody {
  title?: string;
  text?: string;
}

export const createNote: RequestHandler<
  unknown,
  unknown,
  CreateNoteBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;

  try {
    if (!title) {
      throw createHttpError(400, 'Note must have a title');
    }
    const id = uuidv4();
    const newNote = await NoteInstance.create({ id, title, text });
    return res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};
