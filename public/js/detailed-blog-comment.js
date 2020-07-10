const previewBtn = document.querySelector(".comment-form .preview")
let commentForm
let editIcon;

previewBtn.addEventListener("click", function (e) {
    e.preventDefault()
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
    by.textContent = commentForm.name.value
    theComment.appendChild(by)


    const dateWrapper = document.createElement("div")
    const dateEm = document.createElement("em")
    dateEm.textContent = new Date().toDateString()
    dateWrapper.appendChild(dateEm)
    theComment.appendChild(dateWrapper)

    const commentBody = document.createElement("p")
    commentBody.classList.add("comment-body")
    commentBody.textContent = commentForm.comment.value
    theComment.appendChild(commentBody)

    const reviews = document.querySelector(".comments .reviews")


    reviews.appendChild(aComment)

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






    // console.log(aComment)

    // console.log(commentForm)

})

// document.querySelector(".edit-comment").addEventListener("click", function () {
//     // commentForm.style.display = "initial"
//     alert("Clicked")
// })
// alert("linked!!")