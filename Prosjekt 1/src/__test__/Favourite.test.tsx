import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import FavoriteView from "../components/FavouriteView";
import { mswServer } from "../test/mockHTTPserver";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchCity } from "../test/handlers";

const queryClient = new QueryClient();

it("Favourite should render", async () => {
  mswServer.use(fetchCity)
  const wrapper = render(
  <QueryClientProvider client={queryClient}>
    <FavoriteView city="Oslo"></FavoriteView>
  </QueryClientProvider>
  );

  expect(wrapper).toBeTruthy()
});
