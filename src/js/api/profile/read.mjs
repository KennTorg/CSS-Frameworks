import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles";

/**
 * Function to authorize the user with authFetch.
 * @param {string} name
 */

export async function readProfile(name) {
  if (!name) {
    throw new Error("Requieres name");
  }

  const readProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(readProfileURL);

  return await response.json();
}

/**
 * Function to get and make the profile for the user
 * @returns profile
 */

export async function getProfile() {
  const userName = document.querySelector(".");
  const userEmail = document.querySelector(".");
  const img = document.querySelector(".");

  const userData = load("profile");
  const { name, email } = userData;
  const avatar = load("avatar");

  userName.innerHTML = name;
  userEmail.innerText = email;

  if (!avatar) {
    img.src = "https://picsum.photos/seed/picsum/200/300";
    img.alt = "Default profile image";
  } else {
    img.src = avatar;
    img.alt = `${name}s profile image`;
  }

  return getProfile;
}

/**
 * Function to redirect a user to their edit profile page
 */

export function redirectToProfile() {
  const userData = load("profile");
  const { name } = userData;
  const editButton = document.querySelector(".");
  editButton.addEventListener(
    "click",
    () => (editButton.href = `/profile/edit/index.html?name=${name}`)
  );
}
