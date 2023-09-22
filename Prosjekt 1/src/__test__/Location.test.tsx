import { it, expect } from 'vitest'
import { render } from "@testing-library/react"
import Location from '../routes/location'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


it('Location should render and try to send request', async () => {
    const queryClient = new QueryClient();
    const wrapper = render(
        <QueryClientProvider client={queryClient}>
            <Location></Location>
        </QueryClientProvider>
    )
    expect(wrapper).toBeDefined()
})
