import { EMAIL_REGEX } from '@consts';

/**
 * Email validation checker.
 *
 * @param {string} email E-mail for check.
 */
export const validateEmail = (email: string): boolean => String(email).toLowerCase().match(EMAIL_REGEX) != null;