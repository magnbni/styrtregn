import "./App.css";
import Fetcher from "./Fetcher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./Header";
import WeekView from "./WeekView";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <div>
        <QueryClientProvider client={queryClient}>
          <Fetcher></Fetcher>
          <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
      </div>
      <WeekView />
    </>
  );
}

export default App;
