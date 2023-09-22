import { describe, expect, it } from 'vitest'
import DetailedWeekView from '../components/WeekView';
import { DayView, Properties } from '../types';
import { defaultMetData } from '../test/constants';
import { act, render } from '@testing-library/react';

describe('DetailedWeekView test', ()=>{
    const props: {dayView: DayView; rawData: Properties} = {
        dayView: [{
            date: "2023-06-14",
            rain: 5,
            wind: 3,
            maxTemp: 15,
            symbol: "noncloud"
        }],
        rawData: defaultMetData.properties
    }

    const detailedWeekView = render(<DetailedWeekView dayView={props.dayView} rawData={props.rawData}/>)
    
    it('The DetailedWeekView component should output the same HTML with the same props', () => {
        expect(detailedWeekView).toBeDefined()
        expect(detailedWeekView).toMatchSnapshot()
    })
    
    it("The HourlyView should exist when button is pressed", () => {
        const nowWithButton = render(<DetailedWeekView dayView={props.dayView} rawData={props.rawData}></DetailedWeekView>)
        expect(nowWithButton).toBeDefined()
        const hourlyViewButton = detailedWeekView.getByPlaceholderText("hourView")
        expect(hourlyViewButton).toBeTruthy()
        act(()=>{hourlyViewButton.click()})
        if(props.dayView){
            // Testing if the popup header text now exists
            const isShowing = nowWithButton.getByText(`Været ${props.dayView[0].date}`)
            expect(isShowing).toBeTruthy()
        } else {
            expect(false).toBeTruthy()
        }
    })
})