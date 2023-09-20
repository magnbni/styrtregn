import { it, expect } from 'vitest'
import { mswServer } from '../test/mockHTTPserver'
import { fetchGeo_success_response } from '../test/handlers'

it('useFetchCity should return correct things', async () => {
    mswServer.use(fetchGeo_success_response)


    expect(data).toEqual([
        expect.objectContaining({
            date: Date.now()
        })
    ])
})