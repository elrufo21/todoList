import type { Task } from "../entities/Task";
import type { TaskRepository } from "../repositories/TaskRepository";

export const makeAddTask = (repo: TaskRepository) => {
  return async (payload: {
    title: string;
    description?: string;
    // No pedimos state aquí porque lo definimos internamente
    // No pedimos registration_date ni finalization_date; se generan internamente
  }): Promise<number> => {
    const titleClean = payload.title?.trim();
    if (!titleClean) {
      throw new Error("Title requerido");
    }

    const taskToCreate: Omit<Task, "id" | "finalization_date"> = {
      title: titleClean,
      description: payload.description,
      state: "A",  // A de “activo” o como definas el estado inicial
      registration_date: new Date(),
    };

    const newId = await repo.add(taskToCreate);
    return newId;
  };
};
