import type { VercelRequest, VercelResponse } from "@vercel/node";
import { deleteTodo, editTodo, findOneTodo, Todo } from "../libs/todos";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { id } = request.query;

  if (request.method === "GET") {
    return response.json(findOneTodo(id as string));
  }
  if (request.method === "PUT") {
    const body = request.body as Omit<Todo, "id">;
    return response.json(editTodo(id as string, body));
  }
  if (request.method === "DELETE") {
    return response.json(deleteTodo(id as string));
  }
}
