(function () {
    const genartaeCouponsBtn = document.querySelector(".generate-coupons")
    const numberOfCouponsHandler = document.querySelector("#number-of-coupons")
    const couponTableBody = document.querySelector(".new-coupon-table tbody")
    // console.log(couponTableBody)

    genartaeCouponsBtn.addEventListener("click", async function (e) {
        e.preventDefault()
        numberOfCoupons = numberOfCouponsHandler.value.trim()

        const resp = await fetch("/api/coupons", {
            method: "post",
            body: JSON.stringify({ number: numberOfCoupons }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await resp.json()
        console.log(data)
        addCoupon(data.data)


    })
    function addCoupon(data) {
        data.forEach((coupon, index) => {
            const trow = document.createElement("tr")
            const snData = document.createElement("td")
            snData.textContent = index + 1
            const couponData = document.createElement("td")
            couponData.textContent = coupon
            trow.appendChild(snData)
            trow.appendChild(couponData)
            couponTableBody.appendChild(trow)

        })
    }
    // const getData = async function () {
    //     const resp = await fetch("/api/coupons")
    //     const outData = await resp.json()
    //     // console.log(outData)
    //     const data = []
    //     outData.data.forEach(coupon => {
    //         data.push(coupon.coupon)
    //     })


    //     // console.log(data)
    //     addCoupon(data)
    // }
    // getData()

})()