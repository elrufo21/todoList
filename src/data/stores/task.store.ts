import { create } from "zustand";
import type { Task } from "../../core/entities/Task";
import { taskRepoDexie } from "../db/task.repo.dexie";

// Definimos la forma del estado del store
interface TaskState {
  tasks: Task[];
  loading: boolean;
  error?: string;

  loadTasks: () => Promise<void>;
  addTask: (title: string, description?: string) => Promise<void>;
  toggleTask: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  loading: false,
  error: undefined,

  loadTasks: async () => {
    set({ loading: true, error: undefined });
    try {
      const all = await taskRepoDexie.getAll();
      set({ tasks: all, loading: false });
    } catch (err: any) {
      set({ loading: false, error: err.message || "Error cargando tareas" });
    }
  },

  addTask: async (title, description) => {
    set({ loading: true, error: undefined });
    try {
      const id = await taskRepoDexie.add({
        title,
        description,
        state: "A",
        registration_date: new Date(),
      });
      // después de agregar, recargas o simplemente insertar localmente
      const all = await taskRepoDexie.getAll();
      set({ tasks: all, loading: false });
    } catch (err: any) {
      set({ loading: false, error: err.message || "Error creando tarea" });
    }
  },

  toggleTask: async (id) => {
    set({ loading: true, error: undefined });
    try {
      const task = await taskRepoDexie.getById(id);
      if (task) {
        await taskRepoDexie.update(id, {
          state: task.state === "A" ? "C" : "A",  // o lógica que definas
          finalization_date:
            task.state === "A" ? new Date() : undefined,
        });
      }
      const all = await taskRepoDexie.getAll();
      set({ tasks: all, loading: false });
    } catch (err: any) {
      set({ loading: false, error: err.message || "Error actualizando tarea" });
    }
  },

  deleteTask: async (id) => {
    set({ loading: true, error: undefined });
    try {
      await taskRepoDexie.delete(id);
      const all = await taskRepoDexie.getAll();
      set({ tasks: all, loading: false });
    } catch (err: any) {
      set({ loading: false, error: err.message || "Error eliminando tarea" });
    }
  },
}));
