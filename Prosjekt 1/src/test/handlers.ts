import { rest } from 'msw'

const geoPath = 'https://eu1.locationiq.com/v1/search?key=pk.3e21916e151f4d42374fdc631eded07a'
const metPath = 'https://api.met.no/weatherapi/locationforecast/2.0/compact'

export const fetchMetData_incomplete_response = rest.get(metPath, async (_req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([
            {
                date: "DEFAULT VALUE"
            },
        ])
    )
})

export const fetchGeo_success_response = rest.get(geoPath, async (req, res, ctx) => {
    const data = req.url.searchParams.get('q')
    return res(
        ctx.status(200),
        ctx.json([
            {
                city: data,
                lat: '59.9133301',
                lon: '10.7389701'
            }
        ])
    )
})

export const fetchMetData_empty_response = rest.get(metPath, async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]))
})


export const handlers = [fetchMetData_empty_response]