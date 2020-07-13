

const couponEntry = document.querySelector("#coupon")
const couponSubmitButton = document.querySelector(".submit-coupon")
const couponResetButton = document.querySelector(".reset-coupon")
const userSubmitButton = document.querySelector(".user-submit")

const couponModalWrapper = document.querySelector(".coupon-page");
const termsAndConditions = document.querySelector(".registeration .t-and-c")
// console.log(termsAndConditions)

const modalPageClose = document.querySelector(".coupon-page .fa-close")
// console.log(modalPageClose)
modalPageClose.addEventListener("click", function () {
    couponModalWrapper.classList.add("hide")
})

//create account inputs validation
termsAndConditions.addEventListener("input", function () {
    if (this.checked) {
        enableButton()
    } else {
        disableButton()
    }
})



function disableButton() {
    userSubmitButton.style.backgroundColor = "lightgray"
    userSubmitButton.style.border = "1px solid lightgray"
    userSubmitButton.disabled = true
}

function enableButton() {
    userSubmitButton.style.backgroundColor = "#0f55ec"
    userSubmitButton.style.border = "1px solid #0f55ec"
    userSubmitButton.disabled = false
}


disableButton()

userSubmitButton.addEventListener("click", function (e) {

    e.preventDefault()
    couponModalWrapper.classList.remove("hide")
    couponModalWrapper.style.height = document.documentElement.clientHeight;
    console.log(document.documentElement.clientHeight)

})



couponEntry.addEventListener("input", function () {
    if (this.value.length === 10 && this.value.substr(7) === "dnp") {
        console.log("valid form")
        this.style.border = "2px solid green"
    } else {
        this.style.border = "0.5px solid lightgray";
    }
})

couponSubmitButton.addEventListener("click", async function (e) {
    e.preventDefault()
    console.log("Clicked")
    const resp = await fetch("/registration/coupon", {
        method: "post",
        body: JSON.stringify({
            coupon: couponEntry.value
        }),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }

    })
    const data = await resp.json()
    console.log(data[0].used)
    if (data[0].used === false) {
        document.querySelector(".hidden-login").click()
    }


})

couponResetButton.addEventListener("click", function (e) {
    e.preventDefault()
    couponEntry.value = ""
    couponEntry.style.border = "0.5px solid lightgray";

})