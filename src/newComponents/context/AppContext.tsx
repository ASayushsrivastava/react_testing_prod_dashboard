import React, { createContext, useContext, useState, useEffect } from "react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

type AppContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;

  username: string;
  setUsername: (name: string) => void;

  notes: string[];
  addNote: (note: string) => void;
  removeNote: (index: number) => void;
  editNote: (i: number, text: string) => void;

  tasks: Task[];
  addTask: (title: string) => void;
  toggleTaskDone: (id: string) => void;
  removeTask: (id: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const [username, setUsername] = useState("Arshdip Singh");

  const [notes, setNotes] = useState<string[]>(() => {
    const saved = localStorage.getItem("my_notes");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleTaskDone = (id: string) => {
    setTasks((prev) =>
      prev.map((t: Task) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const addNote = (note: string) => setNotes((prev) => [...prev, note]);
  const removeNote = (index: number) => {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  };
  const editNote = (i: number, text: string) =>
    setNotes((prev) => prev.map((n, idx) => (i === idx ? text : n)));

  useEffect(() => {
    localStorage.setItem("my_notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        username,
        setUsername,
        notes,
        addNote,
        removeNote,
        editNote,
        tasks,
        addTask,
        removeTask,
        toggleTaskDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
};
