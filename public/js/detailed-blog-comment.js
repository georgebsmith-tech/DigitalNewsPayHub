

const previewBtn = document.querySelector(".comment-form .preview")
let commentForm
let editIcon;
function createComment(preview = true) {
    commentForm = document.forms["comment-form"]

    const aComment = document.createElement("div")
    aComment.classList.add("a-comment")
    aComment.classList.add("temporal")

    const user = document.createElement("div")
    user.classList.add("user")
    aComment.appendChild(user)

    // console.log(aComment)
    const userIcon = document.createElement("i")
    userIcon.classList.add("fa")
    userIcon.classList.add("fa-user")
    userIcon.setAttribute("aria-hidden", "true")
    user.appendChild(userIcon)

    const theComment = document.createElement("div")
    theComment.classList.add("theComment")
    aComment.appendChild(theComment)

    const by = document.createElement("h4")
    by.textContent = commentForm.name.value === "" ? "Anonymous" : commentForm.name.value.trim()
    theComment.appendChild(by)


    const dateWrapper = document.createElement("div")
    const dateEm = document.createElement("em")
    dateEm.textContent = new Date().toDateString()
    dateWrapper.appendChild(dateEm)
    theComment.appendChild(dateWrapper)

    const commentBody = document.createElement("p")
    commentBody.classList.add("comment-body")
    commentBody.textContent = commentForm.comment.value.trim()
    theComment.appendChild(commentBody)

    const reviews = document.querySelector(".comments .reviews")


    reviews.appendChild(aComment)

    if (preview) {
        const edit = document.createElement("div")
        editIcon = document.createElement("i")
        editIcon.classList.add("fa")
        editIcon.classList.add("fa-pencil")
        editIcon.classList.add("edit-comment")
        editIcon.setAttribute("title", "Edit comment")
        editIcon.addEventListener("click", function () {
            commentForm.style.display = "block"
            document.querySelector(".a-comment.temporal").remove()
            // alert("Clicked")
        })
        edit.appendChild(editIcon)
        aComment.appendChild(edit)

        commentForm.style.display = "none"

    } else {
        commentForm.comment.value = ""
        commentForm.name.value = ""
    }


}


previewBtn.addEventListener("click", function (e) {
    e.preventDefault()
    createComment()



    // console.log(aComment)

    // console.log(commentForm)

})

// document.querySelector(".edit-comment").addEventListener("click", function () {
//     // commentForm.style.display = "initial"
//     alert("Clicked")
// })
// alert("linked!!")
const publishBtn = document.querySelector(".pubish-comment")

publishBtn.addEventListener("click", async function (e) {
    e.preventDefault()
    const postSlug = this.dataset.postSlug
    const url = `/api/comments/add/${postSlug}`
    // console.log(url)
    const resp = await fetch(url,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                by: commentForm.name.value === "" ? "Anonymous" : commentForm.name.value.trim(),
                body: commentForm.comment.value,
                date: new Date()
            })

        })

    const data = await resp.json()
    // console.log(data.by)
    // console.log(data.body)
    // console.log(data.date)

    createComment(preview = false)
})
