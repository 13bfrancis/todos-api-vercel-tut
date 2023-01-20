import type { VercelRequest, VercelResponse } from "@vercel/node";
import { v4 as uuid } from "uuid";
import { createTodo, getTodos, Todo } from "../libs/todos";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method === "GET") {
    return response.json(getTodos());
  }

  if (request.method === "POST") {
    const { description, completed } = request.body as Partial<Todo>;

    const createdTodo = createTodo({
      id: uuid(),
      description: description ?? "no description added",
      completed: completed ?? false,
    });

    return response.json(createdTodo);
  }
}
