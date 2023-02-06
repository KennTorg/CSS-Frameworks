import { load } from "../../storage/index.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "put";

/**
 * Function to edit users profile information (banner and avatar)
 * @param {string} profileData
 */

export async function updateProfile(profileData) {
  const { name } = load("profile");

  if (!name) {
    throw new Error("Requires name");
  }
  const updateProfileURL = `${API_SOCIAL_URL}${action}/${name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  return await response.json();
}
