import { describe, it, expect } from 'vitest'
import LastNameValidator from './LastNameValidator'

describe('LastNameValidator', () => {
  it('does not throw for a valid last name', () => {
    expect(() => LastNameValidator.validate('Ramirez')).not.toThrow()
  })

  it('throws an error for an empty string', () => {
    expect(() => LastNameValidator.validate(''))
      .toThrow('Last name is required')
  })

  it('throws an error for a string with only spaces', () => {
    expect(() => LastNameValidator.validate('   '))
      .toThrow('Last name is required')
  })

  it('does not throw for a name with spaces around it', () => {
    expect(() => LastNameValidator.validate('  Ramirez  ')).not.toThrow()
  })
})