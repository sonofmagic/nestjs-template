import { bar } from '../src/index'

describe('index', () => {
  it('foo bar', () => {
    expect(bar()).toBe('foo')
  })
})
