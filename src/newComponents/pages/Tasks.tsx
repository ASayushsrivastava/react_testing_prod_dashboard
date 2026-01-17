import React, { useEffect, useState } from "react";
import { Page } from "../layout/Page";
import { Stack } from "../layout/Stack";
import { Card } from "../layout/Card";
import { Button } from "../ui/Button";
import { useTasks } from "../hooks/useTasks";
import { Task } from "../context/AppContext";

export const Tasks: React.FC = () => {
  const { tasks, addTask, toggleTaskDone, removeTask } = useTasks();
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (tasks.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res) => res.json())
        .then((data) => {
          const converted: Task[] = data.map((t: any) => ({
            id: crypto.randomUUID(),
            title: t.title,
            completed: false,
          }));
          converted.forEach((task) => addTask(task.title));
        });
    }
  }, []);

  return (
    <Page>
      <h1>Tasks</h1>

      <Card title="Add Task">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task..."
          style={{
            padding: ".5rem",
            marginBottom: ".5rem",
            borderRadius: 6,
            border: "1px solid var(--input-border)",
            background: "var(--input-bg)",
            color: "var(--input-text)",
          }}
        />
        <Button
          onClick={() => {
            if (!newTask.trim()) return;
            addTask(newTask);
            setNewTask("");
          }}
        >
          Add Task
        </Button>
      </Card>

      <Stack gap={16}>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one!</p>
        ) : (
          tasks.map((task: Task) => (
            <Card key={task.id}>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: ".75rem",
                  fontSize: "1.15rem",
                  textDecoration: task.completed ? "line-through" : "none",
                  opacity: task.completed ? 0.6 : 1,
                }}
              >
                {task.title}
              </h2>
              <Stack direction="row" gap={12}>
                {!task.completed ? (
                  <Button onClick={() => toggleTaskDone(task.id)}>
                    Mark Done
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => toggleTaskDone(task.id)}
                  >
                    Undo
                  </Button>
                )}

                <Button variant="outline" onClick={() => removeTask(task.id)}>
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
