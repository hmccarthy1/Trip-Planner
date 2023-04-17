const editUserInfoForm = document.getElementById("editUserInfoForm");
const editUserInfoBtn = document.getElementById("editUserInfoBtn");
const saveUserInfoBtn = document.getElementById("saveUserInfoBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const profilePictureInput = document.getElementById("profilePictureUpload");
const profilePictureImg = document.getElementById("profilePicture");
const { User } = require('../../models/User');

editUserInfoBtn.addEventListener("click", () => {
  usernameInput.disabled = false;
  passwordInput.disabled = false;
  profilePictureInput.disabled = false;
  saveUserInfoBtn.style.display = "inline";
});

editUserInfoForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  try {
    const res = await fetch("/api/updateUserInfo", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      console.log("User information updated successfully!");
    } else {
      console.error("Failed to update user information:", res.status);
    }
  } catch (error) {
    console.error("Failed to update user information:", error);
  }
});
