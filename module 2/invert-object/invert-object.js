export function invertObj(obj) {
    return obj && Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]))
};