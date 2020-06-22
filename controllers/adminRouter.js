const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

const Posts = require("../models/postModel")
const mongoose = require("mongoose");

AdminBro.registerAdapter(AdminBroMongoose)


// const adminBro = new AdminBro({
//     databases: [mongoose],
//     rootPath: '/admin',
//     branding: {
//         companyName: "Digital news Hub"
//     }
// })



const adminBro = new AdminBro({
    resources: [{
        resource: Posts,
        options: {
            properties: {
                body: {
                    type: "richtext"
                },
                markedBody: {
                    isVisible: { show: false }
                }
            },

        },

    }],
    rootPath: '/admin',
    branding: {
        companyName: "Digital news Hub",
        logo: "https://res.cloudinary.com/dfm1c1iri/image/upload/v1592379289/Digitalnewpay_logo-02_z2q6cr.png"
    }

})

const ADMIN = {
    email: "digitalnews@gmail.com",
    password: "dnpayhub"
}

// const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
//     cookieName: "admin-bro",
//     cookiePassword: "This-is-a-supersecret-and-super-super-long",
//     authenticate: async (email, password) => {
//         if (email === ADMIN.email && password === ADMIN.password) {
//             return ADMIN
//         }
//         return null;
//     }
// })

const router = AdminBroExpress.buildRouter(adminBro)


module.exports = router