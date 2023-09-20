import { it, expect } from 'vitest'
import { render, screen } from "@testing-library/react"
import Head from '../Header'

it('Header should render', async () => {
    const wrapper = render(<Head></Head>)

    expect(wrapper).toBeTruthy

    const checkText = screen.getByText(/Styrtregn/)

    expect(checkText).toBeTruthy

})