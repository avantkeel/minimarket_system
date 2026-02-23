import { describe, it, expect } from 'vitest'
import { UserEntity } from './UserEntity'
import IdentifierValueObject from '../../valueObjects/IdentifierValueObject'

describe('UserEntity', () => {

  it('creates a user with valid data', () => {
    const user = new UserEntity(
      new IdentifierValueObject(),
      'henry@example.com',
      'secret123',
      'Henry',
      'Ramirez',
      new Date()
    )

    expect(user.getEmail()).toBe('henry@example.com')
    expect(user.getPasswordHash()).toBe('secret123')
    expect(user.getFirstName()).toBe('Henry')
    expect(user.getLastName()).toBe('Ramirez')
    expect(user.getId()).toBeDefined()
    expect(user.getCreatedAt()).toBeInstanceOf(Date)
  })

  it('throws an error for invalid email', () => {
    expect(() => new UserEntity(
      new IdentifierValueObject(),
      'henryexample.com',
      'secret123',
      'Henry',
      'Ramirez',
      new Date()
    )).toThrow('Invalid email: henryexample.com')
  })

  it('throws an error for empty first name', () => {
    expect(() => new UserEntity(
      new IdentifierValueObject(),
      'henry@example.com',
      'secret123',
      '',
      'Ramirez',
      new Date()
    )).toThrow('First name is required')
  })

  it('throws an error for empty last name', () => {
    expect(() => new UserEntity(
      new IdentifierValueObject(),
      'henry@example.com',
      'secret123',
      'Henry',
      '',
      new Date()
    )).toThrow('Last name is required')
  })

})