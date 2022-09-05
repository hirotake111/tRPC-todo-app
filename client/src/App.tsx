import { QueryClientProvider, QueryClient } from "react-query";
import { trpc } from "./trpc";

import { useState } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";

import "./App.css";

const client = new QueryClient();
const url = "http://localhost:3000/trpc";

function App() {
  const [trpcClient] = useState(() => trpc.createClient({ url }));

  return (
    <trpc.Provider queryClient={client} client={trpcClient}>
      <QueryClientProvider client={client}>
        <div>
          <TodoList />
          <Form />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
