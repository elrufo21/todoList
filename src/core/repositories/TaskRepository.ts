import type { Task } from "../entities/Task";

export interface TaskRepository {
  add(task: Omit<Task, "id" | "finalization_date">): Promise<number>;
  getAll(): Promise<Task[]>;
  getById(id: number): Promise<Task | undefined>;
  update(id: number, patch: Partial<Omit<Task, "id">>): Promise<void>;
  delete(id: number): Promise<void>;
}
