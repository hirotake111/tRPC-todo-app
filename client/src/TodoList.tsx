import { trpc } from "./trpc";

export const TodoList = () => {
  const { data, isFetched } = trpc.useQuery(["getTodoList"]);

  if (!isFetched) return <>loading</>;

  return (
    <div>
      <span>todo list</span>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};
