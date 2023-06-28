/**
 *    ^ - Start of the string
    [a-zA-Z0-9._%+-]+ - One or more alphanumeric characters, dots, underscores, percent signs, plus signs, or hyphens (before the @ symbol)
    @ - The @ symbol
    [a-zA-Z0-9.-]+ - One or more alphanumeric characters, dots, or hyphens (after the @ symbol and before the domain)
    \. - A literal dot (the escape character is required since dot has a special meaning in regex)
    [a-zA-Z]{2,} - Two or more alphabetical characters (the domain extension)
    $ - End of the string
 */
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

/**
 *     ^ - Asserts the beginning of the string.
    (?=.*[A-Za-z]) - Positive lookahead assertion to ensure that the string contains at least one letter (uppercase or lowercase).
    (?=.*[0-9]) - Positive lookahead assertion to ensure that the string contains at least one digit.
    (?=.*[@$!%*#?&]) - Positive lookahead assertion to ensure that the string contains at least one of the following special characters: @, $, !, %, *, #, ?, or &.
    [A-Za-z0-9@$!%*#?&]{8,} - Matches a sequence of characters that can be letters (uppercase or lowercase), digits, or the special characters mentioned above. The length of this sequence should be at least 8 characters.
    $ - Asserts the end of the string.
 */
export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/;

export const safeTextRegex = /^[A-Za-z\s]+$/;

/*Explanation of the regex pattern:

    ^ asserts the start of the string.
    [a-zA-Z0-9\s-] matches any alphanumeric character, whitespace, or hyphen.
    * allows zero or more occurrences of the preceding pattern.
    $ asserts the end of the string. */
export const safeDateRegex = /^[a-zA-Z0-9\s-]*$/;
