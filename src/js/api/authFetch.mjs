import { load } from "../storage/index.mjs";

/**
 * Sets the headers.
 */

export function headers() {
    const token = load("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    };
}

/**
 * Authorization fetch for create, read, delete and update.
 * @param {string} url
 * @param {string} options
 */

export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    });
}
