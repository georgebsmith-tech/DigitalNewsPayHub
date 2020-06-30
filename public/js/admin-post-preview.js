const previewBtn = document.querySelector(".preview-post")
// console.log(previewBtn)


previewBtn.addEventListener("click", function () {
    const category = document.forms.post.category.value
    const title = document.forms.post.category.title
    // const  category=document.forms.post.category.value
    const body = document.forms.post.body.textContent
    const url = document.forms.post.url.value
    console.log(url)

    document.querySelector(".modal").textContent = body

    fetch(url)
})