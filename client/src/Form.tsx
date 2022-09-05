import { useRef } from "react";
import { trpc } from "./trpc";

export function Form() {
  const mutation = trpc.useMutation("addTodo");
  const inputRef = useRef<HTMLInputElement>(null);
  const utils = trpc.useContext();

  const handleClick = () => {
    if (inputRef.current) {
      mutation.mutate(
        { text: inputRef.current.value },
        { onSuccess: () => utils.invalidateQueries("getTodoList") }
      );
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="add something" />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
}
