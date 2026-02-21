import { describe, it, expect } from 'vitest'
import FirstNameValidator from './FirstNameValidator'

describe('FirstNameValidator', () => {
  it('does not throw for a valid first name', () => {
    expect(() => FirstNameValidator.validate('Henry')).not.toThrow()
  })

  it('throws an error for an empty string', () => {
    expect(() => FirstNameValidator.validate(''))
      .toThrow('First name is required')
  })

  it('throws an error for a string with only spaces', () => {
    expect(() => FirstNameValidator.validate('   '))
      .toThrow('First name is required')
  })

  it('does not throw for a name with spaces around it', () => {
    expect(() => FirstNameValidator.validate('  Henry  ')).not.toThrow()
  })
})