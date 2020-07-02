
// https://wa.me/?text=[post-title] [post-url]


// https://www.facebook.com/sharer.php?u=[post-url]

// https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]



// https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]


const twitterControl = document.querySelector(".social-media-share #twitter");
const facebookControl = document.querySelector(".social-media-share #facebook");
const whatsappControl = document.querySelector(".social-media-share #whatsapp");
const linkedinControl = document.querySelector(".social-media-share #linkedin");


function init() {
    alert("aamom")
    const blogUrl = encodeURI(document.location.href)
    const postTitle = document.querySelector("#post-title").textContent;
    const postImage = document.querySelector(".image#post-image").getAttribute("src")

    facebookControl.href = `https://www.facebook.com/sharer.php?u=${blogUrl}`
    whatsappControl.setAttribute("href", `https://wa.me/?text=${postTitle} ${blogUrl}`)
    linkedinControl.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${blogUrl}&title=${postTitle}`)
    twitterControl.setAttribute("href", `https://twitter.com/share?url=${blogUrl}&text=${postTitle}`)
    console.log(blogUrl)

}

init()



