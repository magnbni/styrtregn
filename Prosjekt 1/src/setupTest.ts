import { mswServer } from './test/mockHTTPserver'
import { afterAll, beforeEach, afterEach } from "vitest"

beforeEach(() => mswServer.listen())
afterEach(() => mswServer.resetHandlers())
afterAll(() => mswServer.close())