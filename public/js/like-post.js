const likeHandler = document.querySelector(".like-post")


likeHandler.addEventListener("click", async function () {
    const likeUrl = this.getAttribute("data-like-url")
    const resp = await fetch(likeUrl)
    const data = await resp.json()


    document.querySelector(".number-of-like").textContent = data.number_of_likes
})