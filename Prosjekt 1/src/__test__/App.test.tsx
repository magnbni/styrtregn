import { it, expect } from 'vitest'
import { render } from "@testing-library/react"
import App from '../App'
import { BrowserRouter } from 'react-router-dom'

it('App should exist', async () => {
    const wrapper = render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
    expect(wrapper).toBeDefined()
})