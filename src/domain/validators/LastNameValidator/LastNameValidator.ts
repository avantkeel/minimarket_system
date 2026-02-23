export default class LastNameValidator {
    static validate(lastName: string) {
        if (!lastName || lastName.trim().length === 0) {
            throw new Error('Last name is required');
        }
    }
}