import crypto from 'crypto';
import EmailValidator from '../validators/EmailValidator/EmailValidator';
import PasswordValidator from '../validators/PasswordValidator/PasswordValidator';
import FirstNameValidator from '../validators/FirstNameValidator/FirstNameValidator';
import LastNameValidator from '../validators/LastNameValidator/LastNameValidator';

export class UserEntity {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;

    constructor(
        email: string,
        password: string,
        firstName: string,
        lastName: string
    ) {
        EmailValidator.validate(email);
        PasswordValidator.validate(password);
        FirstNameValidator.validate(firstName);
        LastNameValidator.validate(lastName);

        this.id = crypto.randomUUID();
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = new Date();
    }

    getId() { return this.id; }
    getFirstName() { return this.firstName; }
    getLastName() { return this.lastName; }
    getEmail() { return this.email; }
    getPassword() { return this.password; }
    getCreatedAt() { return this.createdAt; }
}
