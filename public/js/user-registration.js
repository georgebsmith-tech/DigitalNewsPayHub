

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
userSubmitButton.addEventListener("click", async function (e) {

    e.preventDefault()
    couponModalWrapper.classList.remove("hide")
    couponModalWrapper.style.height = document.documentElement.clientHeight;
    // console.log(document.documentElement.clientHeight)
    const username = document.querySelector("[name=username]").value
    const first_name = document.querySelector("[name=first-name]").value
    const last_name = document.querySelector("[name=last-name]").value
    const email = document.querySelector("[name=email]").value
    const phone = document.querySelector("[name=phone]").value

    const password = document.querySelector("[name=password]").value
    const password_check = document.querySelector("[name=confirm-password]").value
    const ref_username = document.querySelector("[name=ref-username]").value
    const termsAndConditions = document.querySelector("[name=t-and-c]").checked
    console.log(termsAndConditions)
    console.log(last_name)
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
    // console.log("Clicked")
    // const resp = await fetch("/registration/coupon", {
    //     method: "post",
    //     body: JSON.stringify({
    //         coupon: couponEntry.value
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     }

    // })

    inData.coupon = couponEntry.value.trim()
    const resp = await fetch("/api/users", {
        method: 'post',
        body: JSON.stringify(inData),
        headers: {
            'Content-Type': "application/json"
        }
    })

    const outData = await resp.json()
    // console.log(outData)
    // console.log(data[0].used)
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