import { describe, it, expect } from 'vitest'
import PasswordValidator from './PasswordValidator'

describe('PasswordValidator', () => {
  it('does not throw for a valid password', () => {
    expect(() => PasswordValidator.validate('secret123')).not.toThrow()
  })

  it('throws an error for a too short password', () => {
    expect(() => PasswordValidator.validate('123'))
      .toThrow('Password too short: 123')
  })

  it('throws an error for an empty string', () => {
    expect(() => PasswordValidator.validate(''))
      .toThrow('Password too short: ')
  })

  it('accepts exactly 6 characters', () => {
    expect(() => PasswordValidator.validate('123456')).not.toThrow()
  })
})