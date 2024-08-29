import jwt from 'jsonwebtoken';

export function createSecretToken(id) {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: '3d', // '3d' is more readable and equivalent to 3 * 24 * 60 * 60
    });
}
