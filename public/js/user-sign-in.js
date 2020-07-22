

(function () {
    const userSignInBtn = document.querySelector(".user-sign-in-btn")
    const usernameHandler = document.querySelector("[name=username]")
    const passwordHandler = document.querySelector("[name=password]")
    const signInError = document.querySelector(".sign-in-error")

    userSignInBtn.addEventListener("click", async function (e) {
        e.preventDefault()
        const username = usernameHandler.value.trim()
        const password = passwordHandler.value
        const resp = await fetch(`/api/users/${username}`, {
            method: "post",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        // console.log(resp)
        if (resp.status === 401) {
            console.log("invalid username or password")
            signInError.style.display = "block"
            signInError.style.color = "red"
        }
        const result = await resp.json()
        console.log(result)

    })
})()