import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import FavoriteView from "../components/FavouriteView";
import { mswServer } from "../test/mockHTTPserver";
import { fetchCity } from "../test/handlers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

it("Favourite should render", async () => {
  const queryClient = new QueryClient();
  mswServer.use(fetchCity);
  const wrapper = render(
    <QueryClientProvider client={queryClient}>
      <FavoriteView city="Oslo"/>
    </QueryClientProvider>);

  expect(wrapper).toBeTruthy;
});
