// src/data/db/task.repo.dexie.ts

import { db } from './database';
import type { Task } from '../../core/entities/Task';
import type { TaskRepository } from '../../core/repositories/TaskRepository';

export const taskRepoDexie: TaskRepository = {
  add: async (taskToCreate) => {
    // Aquí Dexie genera el id automáticamente
    const id = await db.tasks.add(taskToCreate as Task);  
    return id as number;
  },

  getAll: async () => {
    const all = await db.tasks.toArray();
    return all;
  },

  getById: async (id) => {
    const task = await db.tasks.get(id);
    return task;
  },

  update: async (id, patch) => {
    // patch puede incluir state, description, finalization_date, etc.
    await db.tasks.update(id, patch);
  },

  delete: async (id) => {
    await db.tasks.delete(id);
  }
};
