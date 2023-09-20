import { it, expect } from 'vitest'
import { render } from "@testing-library/react"
import App from '../App'

it('App should exist', async () => {
    const wrapper = render(<App/>)
    expect(wrapper).toBeDefined()
})