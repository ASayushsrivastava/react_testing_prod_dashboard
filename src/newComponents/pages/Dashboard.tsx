import React from "react";
import { Stack } from "../layout/Stack";
import { Page } from "../layout/Page";
import { Card } from "../layout/Card";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../hooks/useNotes";
import { useTasks } from "../hooks/useTasks";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { notes } = useNotes();

  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  return (
    <Page>
      <h1>Welcome to Productivity Dashboard</h1>

      <Stack gap={16}>
        <Card title="Overview">
          <p>
            You have {pendingTasks} pending tasks, {completedTasks} completed
            tasks, and {notes.length} notes.
          </p>

          <Button onClick={() => navigate("/tasks")}>View Tasks</Button>
          <Button onClick={() => navigate("/notes")}>View Notes</Button>
        </Card>

        <Card title="Quick Actions">
          <Button onClick={() => navigate("/tasks")}>New Task</Button>
          <Button onClick={() => navigate("/notes")}>New Note</Button>
        </Card>
      </Stack>
    </Page>
  );
};
