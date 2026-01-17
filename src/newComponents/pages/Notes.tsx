import React, { useState } from "react";
import { Page } from "../layout/Page";
import { Stack } from "../layout/Stack";
import { Card } from "../layout/Card";
import { Button } from "../ui/Button";
import { useNotes } from "../hooks/useNotes";

export const Notes: React.FC = () => {
  const { notes, addNote, editNote, removeNote } = useNotes();
  const [newNote, setNewNote] = useState("");

  return (
    <Page>
      <h1>Notes</h1>

      <Card title="Add Note">
        <input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a note..."
        />
        <Button
          onClick={() => {
            if (!newNote.trim()) return;
            addNote(newNote);
            setNewNote("");
          }}
        >
          Add
        </Button>
      </Card>

      <Stack gap={16}>
        {notes.length === 0 ? (
          <p>No notes yet. Add one!</p>
        ) : (
          notes.map((note, i) => (
            <Card key={i} title={`Note ${i + 1}`}>
              <Stack direction="row" gap={12}>
                <input
                  title="notes"
                  value={note}
                  onChange={(e) => editNote(i, e.target.value)}
                  style={{
                    flex: 1,
                    padding: ".4rem",
                    borderRadius: 6,
                    border: "1px solid var(--input-border)",
                    background: "var(--input-bg)",
                    color: "var(--input-text)",
                  }}
                />

                <Button variant="outline" onClick={() => removeNote(i)}>
                  Remove
                </Button>
              </Stack>
            </Card>
          ))
        )}
      </Stack>
    </Page>
  );
};
