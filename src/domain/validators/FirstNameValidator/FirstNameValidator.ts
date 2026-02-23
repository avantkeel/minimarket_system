export default class FirstNameValidator {
    static validate(firstName: string) {
        if (!firstName || firstName.trim().length === 0) {
            throw new Error('First name is required');
        }
    }
}
