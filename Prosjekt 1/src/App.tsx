import "./App.css";
import Fetcher from "./Fetcher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();


function App() {

  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <Fetcher></Fetcher>
          <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
