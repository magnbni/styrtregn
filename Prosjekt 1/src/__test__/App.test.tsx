import { it, expect } from 'vitest'
import { mswServer } from '../test/mockHTTPserver'
import { fetchGeo_success_response } from '../test/handlers'
import useFetchCity from '../useFetchCity'
it('useFetchCity should return correct things', async () => {
    mswServer.use(fetchGeo_success_response)
    
    const data = useFetchCity("Oslo")

    expect(data).toEqual([
        expect.objectContaining({
            date: Date.now()
        })
    ])
})