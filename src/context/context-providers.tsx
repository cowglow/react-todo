import React from "react";
import { TasksContextProvider } from "./tasks-context/tasks-context";

interface ContextProviderProps {
  children: React.ReactNode;
}

export const ContextProviders: React.FC<ContextProviderProps> = ({
  children,
}) => (
  <TasksContextProvider>
    <>{children}</>
  </TasksContextProvider>
);
