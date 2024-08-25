const showButton = document.getElementById("show-share-block-button")
const hideButton = document.getElementById("hide-share-block-button")

const avatarDiv = document.getElementById("person-info-container")
const shareDiv = document.getElementById("share-container")


showButton.addEventListener("click", () => {
    avatarDiv.classList.add("hidden")
    shareDiv.classList.remove("hidden")
})

hideButton.addEventListener("click", () => {
    avatarDiv.classList.remove("hidden")
    shareDiv.classList.add("hidden")
})


