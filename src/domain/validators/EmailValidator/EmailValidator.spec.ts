import { describe, it, expect } from 'vitest'
import EmailValidator from './EmailValidator'

describe('EmailValidator', () => {
  it('does not throw for a valid email', () => {
    expect(() => EmailValidator.validate('henry@example.com')).not.toThrow()
  })

  it('throws an error for an invalid email', () => {
    expect(() => EmailValidator.validate('henryexample.com'))
      .toThrow('Invalid email: henryexample.com')
  })

  it('throws an error for an empty string', () => {
    expect(() => EmailValidator.validate(''))
      .toThrow('Invalid email: ')
  })
})