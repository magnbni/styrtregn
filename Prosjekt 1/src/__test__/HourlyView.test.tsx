import { expect, it } from 'vitest'
import HourlyView from '../components/HourlyView'
import { Properties } from '../types';

it('The HourlyView component should output the same HTML with the same props', () => {
    const props: { metData: Properties; day: string } = {
        metData: {
            meta: {
                updated_at: '2021-10-10T09:00:00Z',
                units: {
                    air_pressure_at_sea_level: 'hPa',
                    air_temperature: 'celsius',
                    cloud_area_fraction: '%',
                    precipitation_amount: 'mm',
                    relative_humidity: '%',
                    wind_from_direction: 'degrees',
                    wind_speed: 'm/s',
                },
            },
            timeseries: [
                {
                    time: '2021-10-10T09:00:00Z',
                    data: {
                        instant: {
                            details: {
                                air_pressure_at_sea_level: 1000.6,
                                air_temperature: 8.9,
                                cloud_area_fraction: 100,
                                relative_humidity: 93.4,
                                wind_from_direction: 237.5,
                                wind_speed: 2.4,
                            },
                        },
                        next_1_hours: {
                            summary: {
                                symbol_code: 'rainshowers_day',
                            },
                            details: {
                                precipitation_amount: 0.3,
                            },
                        },
                        next_6_hours: {
                            summary: {
                                symbol_code: 'rainshowers_day',
                            },
                            details: {
                                precipitation_amount: 0.4,
                            },
                        },
                    },
                },
            ],
        },
        day: '2021-10-10'}
    const hourlyView = HourlyView(props)
    expect(hourlyView).toMatchSnapshot()
})