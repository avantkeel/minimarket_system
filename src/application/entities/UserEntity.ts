import EmailValidator from '../validators/EmailValidator/EmailValidator';
import PasswordValidator from '../validators/PasswordValidator/PasswordValidator';
import FirstNameValidator from '../validators/FirstNameValidator/FirstNameValidator';
import LastNameValidator from '../validators/LastNameValidator/LastNameValidator';
import UserId from '../valueObjects/UserId';

export class UserEntity {
    id: UserId;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;

    constructor(
        id: UserId,
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        createdAt: Date
    ) {
        EmailValidator.validate(email);
        PasswordValidator.validate(password);
        FirstNameValidator.validate(firstName);
        LastNameValidator.validate(lastName);

        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = createdAt;
    }

    getId() { return this.id; }
    getFirstName() { return this.firstName; }
    getLastName() { return this.lastName; }
    getEmail() { return this.email; }
    getPassword() { return this.password; }
    getCreatedAt() { return this.createdAt; }
}
