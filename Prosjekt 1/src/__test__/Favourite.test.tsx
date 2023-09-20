import { it, expect } from 'vitest'
import { render } from "@testing-library/react"
import FavoriteView from '../FavouriteView'
import { mswServer } from '../test/mockHTTPserver'
import { fetchCity } from '../test/handlers'

it('Favourite should render', async () => {
    mswServer.use(fetchCity)
    const wrapper = render(<FavoriteView city="Oslo"></FavoriteView>)

    expect(wrapper).toBeTruthy

})