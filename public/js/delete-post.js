

let deletePostBtns = document.querySelectorAll(".update .delete-post")
let deletePostUrl = document.querySelector(".nothing").getAttribute("href")


deletePostBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        const ans = confirm("Are you sure you want to delete this post?")
        if (ans) {
            fetch(deletePostUrl, {
                method: "DELETE"
            })

        }
    })
})

