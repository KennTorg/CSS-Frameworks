import { getProfile, readProfile } from "../api/profile/read.mjs";
import { load, save, remove } from "../../js/storage/index.mjs";

/**
 * Function for the listener edit profile form.
 */

export async function editProfileListener() {
  const form = document.querySelector("#");

  if (form) {
    const { name, email } = load("profile");
    const avatar = load("avatar");
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);
    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;
      save("avatar", form.avatar.value);
      //send it to the API.
      updateProfile(profile);
      location.reload();
    });
  }
}
