

const couponEntry = document.querySelector("#coupon")
const couponSubmitButton = document.querySelector(".submit-coupon")
const couponResetButton = document.querySelector(".reset-coupon")
const userSubmitButton = document.querySelector(".user-submit")
// console.log(userSubmitButton)
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
let inData;
let exitFlag;
const errorMsgs = document.querySelectorAll(".error-message")
userSubmitButton.addEventListener("click", async function (e) {
    exitFlag = false
    e.preventDefault()
    errorMsgs.forEach(msg => {
        msg.style.visibility = "hidden"
    })

    couponModalWrapper.style.height = document.documentElement.clientHeight;
    // console.log(document.documentElement.clientHeight)
    const username = document.querySelector("[name=username]").value
    const first_name = document.querySelector("[name=first-name]").value
    console.log(document.querySelector(".error-message"))
    // console.log(first_name.trim() === "")

    const last_name = document.querySelector("[name=last-name]").value
    const email = document.querySelector("[name=email]").value
    const phone = document.querySelector("[name=phone]").value

    const password = document.querySelector("[name=password]").value
    const password_check = document.querySelector("[name=confirm-password]").value
    const ref_username = document.querySelector("[name=ref-username]").value
    const termsAndConditions = document.querySelector("[name=t-and-c]").checked
    if (first_name.trim() === "") {
        errorMsgs[0].textContent = "First Name field can not be empty"
        errorMsgs[0].style.visibility = "visible"

        exitFlag = true
    }
    if (last_name.trim() === "") {
        errorMsgs[1].textContent = "Last Name field can not be empty"
        errorMsgs[1].style.visibility = "visible"
        exitFlag = true
    }
    if (username.trim() === "") {
        errorMsgs[2].textContent = "Username field can not be empty"
        errorMsgs[2].style.visibility = "visible"
        exitFlag = true
    }
    if (email.trim() === "") {
        errorMsgs[3].textContent = "Email field can not be empty"
        errorMsgs[3].style.visibility = "visible"
        exitFlag = true
    }
    if (phone.trim() === "") {
        errorMsgs[4].textContent = "Phone field can not be empty"
        errorMsgs[4].style.visibility = "visible"
        exitFlag = true
    }
    if (password.trim() === "") {
        errorMsgs[5].textContent = "Password field can not be empty"
        errorMsgs[5].style.visibility = "visible"
        exitFlag = true
    }
    if (password_check.trim() === "") {
        errorMsgs[6].textContent = "'Confirm field' password field can not be empty"
        errorMsgs[6].style.visibility = "visible"
        exitFlag = true
    }
    // console.log(termsAndConditions)
    // console.log(last_name)
    if (exitFlag) return
    inData = {
        username,
        first_name,
        last_name,
        email,
        password,
        ref_username,
        phone,
        password_check,
        termsAndConditions
    }
    couponModalWrapper.classList.remove("hide")
    // console.log(inData)
    // return




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
    inData.coupon = couponEntry.value.trim()
    const resp = await fetch("/api/users", {
        method: 'post',
        body: JSON.stringify(inData),
        headers: {
            'Content-Type': "application/json"
        }
    })

    const outData = await resp.json()
    if (outData.found) {

        if (resp.status === 200 && outData.registered) {
            console.log("Registered!!")

            document.querySelector(".hidden-login").click()
        }
    } else {
        console.log("Not Registered")
    }



})

couponResetButton.addEventListener("click", function (e) {
    e.preventDefault()
    couponEntry.value = ""
    couponEntry.style.border = "0.5px solid lightgray";

})