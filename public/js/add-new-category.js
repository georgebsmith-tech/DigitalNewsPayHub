

const addcategoryBtn = document.querySelector(".categories-and-new button")
const addcategoryInput = document.querySelector(".categories-and-new input")




// if (addcategoryBtn.disabled) {
//     addcategoryBtn.style.backgroundColor = " rgb(135,206,235)"
// }



// addcategoryInput.addEventListener("input,async", async function (e) {
//     e.preventDefault()
//     const resp = await fetch("/api/get-categories")
//     const data = await resp.json()
//     // console.log(data)
//     const categories = []
//     for (let category of data) {
//         categories.push(category.name)
//     }
//     const newCategory = this.value;
//     let state = false
//     for (category of categories) {
//         if (newCategory === category) {
//             state = true
//             break
//         }

//     }
//     if (!state && newCategory.length > 0) {
//         addcategoryBtn.style.disabled = false
//         addcategoryBtn.style.backgroundColor = "#003FED;"
//     } else {
//         addcategoryBtn.style.disabled = true
//         addcategoryBtn.style.backgroundColor = " rgb(135,206,235)"
//     }
// })


addcategoryBtn.addEventListener("click", function () {
    alert("category added.")
})