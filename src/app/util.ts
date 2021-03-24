export function isNotNullOrUndefined<T>(value: T): boolean {
    return !isNullOrUndefined(value);
}

export function isNullOrUndefined<T>(value: T): boolean {
    return value === null || value === undefined;
}
