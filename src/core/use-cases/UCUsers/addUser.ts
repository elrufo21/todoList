import type { Task } from "../../entities/Task";
import type { TaskRepository } from "../../repositories/TaskRepository";

export const makeAddTask = (repo: TaskRepository) => {
  return async (payload: {
    title: string;
    description?: string;
    userId:number
  }): Promise<number> => {
    const titleClean = payload.title?.trim();
    if (!titleClean) {
      throw new Error("Title requerido");
    }

    const taskToCreate: Omit<Task, "id" | "finalization_date"> = {
      title: titleClean,
      description: payload.description,
      state: "A",  
      registration_date: new Date(),
      userId: payload.userId
    };

    const newId = await repo.add(taskToCreate);
    return newId;
  };
};
