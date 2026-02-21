import { describe, it, expect } from 'vitest'
import { UserEntity } from './UserEntity'

describe('UserEntity', () => {

  it('creates a user with valid data', () => {
    const user = new UserEntity(
      'henry@example.com',
      'secret123',
      'Henry',
      'Ramirez'
    )

    expect(user.getEmail()).toBe('henry@example.com')
    expect(user.getPassword()).toBe('secret123')
    expect(user.getFirstName()).toBe('Henry')
    expect(user.getLastName()).toBe('Ramirez')
    expect(user.getId()).toBeDefined()
    expect(user.getCreatedAt()).toBeInstanceOf(Date)
  })

  it('throws an error for invalid email', () => {
    expect(() => new UserEntity(
      'henryexample.com',
      'secret123',
      'Henry',
      'Ramirez'
    )).toThrow('Invalid email: henryexample.com')
  })

  it('throws an error for short password', () => {
    expect(() => new UserEntity(
      'henry@example.com',
      '123',
      'Henry',
      'Ramirez'
    )).toThrow('Password too short: 123')
  })

  it('throws an error for empty first name', () => {
    expect(() => new UserEntity(
      'henry@example.com',
      'secret123',
      '',
      'Ramirez'
    )).toThrow('First name is required')
  })

  it('throws an error for empty last name', () => {
    expect(() => new UserEntity(
      'henry@example.com',
      'secret123',
      'Henry',
      ''
    )).toThrow('Last name is required')
  })

})