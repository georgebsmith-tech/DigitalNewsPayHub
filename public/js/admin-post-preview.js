

const previewBtn = document.querySelector(".preview-post")
// console.log(previewBtn)


previewBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const category = document.forms.post.category.value
    const title = document.forms.post.title.value
    // const  category=document.forms.post.category.value
    const body = document.forms.post.body.textContent
    const image_url = document.forms.post.image_url.value
    const url = document.forms.post.url.value
    console.log(url)

    // document.querySelector(".try-me").click()

    const data = { title, category, body, image_url }
    fetch("/trial", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            document.querySelector(".try-me").click();
        })
})



// document.querySelector(".update .delete-post").addEventListener("click", function (e) {

//     alert("Do nothing")
// })