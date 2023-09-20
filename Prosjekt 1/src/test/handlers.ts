import { rest } from 'msw'

const geoPath = ''
const metPath = ''

export const fetchMetData_incomplete_response = rest.get(metPath, async (req, res, ctx) => {
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
    return res(
        ctx.status(200),
        ctx.json([
            {
                lat: 'CHANGE DEFAULT',
                lon: 'CHANGE DEFAULT'
            }
        ])
    )
})

export const fetchMetData_empty_response = rest.get(metPath, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]))
})


export const handlers = [fetchMetData_empty_response]