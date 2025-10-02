import Dexie, { type EntityTable } from "dexie";
import type { Task } from "../../core/entities/Task";

export const db = new Dexie("ToDoDB") as Dexie & {
  tasks: EntityTable<Task, "id">;
};

// Definición de las tablas (versionado)
db.version(1).stores({
  tasks: "++id, title, description, state, registration_date,finalization_date", // ++id = autoincrement,
  // title y completed son índices para hacer búsquedas rápidas si las necesitas
});
