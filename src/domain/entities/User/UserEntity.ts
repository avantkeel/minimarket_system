import EmailValidator from '../../validators/EmailValidator/EmailValidator';
import FirstNameValidator from '../../validators/FirstNameValidator/FirstNameValidator';
import LastNameValidator from '../../validators/LastNameValidator/LastNameValidator';
import UserId from '../../valueObjects/UserId';

export class UserEntity {
    id: UserId;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    createdAt: Date;

    constructor(
        id: UserId,
        email: string,
        passwordHash: string,
        firstName: string,
        lastName: string,
        createdAt: Date
    ) {
        EmailValidator.validate(email);
        FirstNameValidator.validate(firstName);
        LastNameValidator.validate(lastName);

        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = createdAt;
    }

    getId() { return this.id; }
    getFirstName() { return this.firstName; }
    getLastName() { return this.lastName; }
    getEmail() { return this.email; }
    getPasswordHash() { return this.passwordHash; }
    getCreatedAt() { return this.createdAt; }
}
