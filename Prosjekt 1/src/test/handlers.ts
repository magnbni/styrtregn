import { rest } from 'msw'

const geoPath = 'https://eu1.locationiq.com/v1/search'
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
export const fetchCity = rest.get(geoPath, async(_req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([{
            date: "2023-03-18",
            rain: 5 ,
            wind: 4,
            maxTemp: 20,
            symbol: "ICON",
        }
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


export const handlers = [fetchMetData_empty_response, fetchGeo_success_response]