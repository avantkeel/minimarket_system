export default class PasswordValidator {
    static validate(password: string) {
        if (password.length < 6) {
            throw new Error(`Password too short: ${password}`);
        }
    }
}
