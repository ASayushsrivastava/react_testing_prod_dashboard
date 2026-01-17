import { useApp } from "../context/AppContext";

export const useNotes = () => {
  const { notes, addNote, editNote, removeNote } = useApp();

  return { notes, addNote, editNote, removeNote };
};
