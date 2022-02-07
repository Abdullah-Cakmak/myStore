export function getObjectFromLocalStorage(key) {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

export function saveObjectToLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}