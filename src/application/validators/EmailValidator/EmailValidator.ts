export default class EmailValidator {
    static validate(email: string) {
        if (!email.includes('@')) {
            throw new Error(`Invalid email: ${email}`);
        }
    }
}
