import type { TaskRepository } from "../repositories/TaskRepository";

export const makeGetTasks = (repo: TaskRepository) => {
  return async () => {
    const tasks = await repo.getAll();
    return tasks.sort((a, b) =>
      (a.registration_date ?? "") > (b.registration_date ?? "") ? -1 : 1
    );
  };
};
