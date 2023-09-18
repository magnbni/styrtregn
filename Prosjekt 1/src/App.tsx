import "./App.css";
import Fetcher from "./Fetcher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./Header";
import Favourites from "./Favourite";

const queryClient = new QueryClient();


function App() {
  return (
    <>
      <Header />
      <Favourites />
      <div>
        <QueryClientProvider client={queryClient}>
          <Fetcher></Fetcher>
          <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
