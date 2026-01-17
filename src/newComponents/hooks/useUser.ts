import { useApp } from "../context/AppContext";

export const useUser = () => {
  const { username, setUsername } = useApp();
  return { username, setUsername };
};
