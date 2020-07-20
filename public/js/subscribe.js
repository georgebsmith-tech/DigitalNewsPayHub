(function () {

    const subscribeBtn = document.querySelector(".subscribe-btn");
    subscribeBtn.addEventListener("click", async function (e) {
        e.preventDefault()
        const form = this.parentElement
        const subStatus = document.querySelector(".sub-statuss")
        const inData = {
            name: form.name.value.trim(),
            email: form.email.value.trim()
        }

        const res = await fetch("/news-letter", {
            method: "post",
            body: JSON.stringify(inData),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        if (res.status === 200) {
            const outData = await res.json()
            subStatus.textContent = "Your Subscription was successful"
            subStatus.style.color = "green"
            subStatus.style.fontSize = "1.5rem"
            form.name.value = ""
            form.email.value = ""
            setTimeout(() => {
                subStatus.style.display = "none";
            }, 5000)

        }



    })



})()


