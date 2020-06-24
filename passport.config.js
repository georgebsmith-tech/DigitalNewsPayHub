const PassportLocalStrategy = require("passport-local").Strategy
const AdminModel = require("./models/adminModel")

const bcrypt = require("bcrypt")



function initialize(passport, getUserByName, getUserById) {
    const authenticateuser = async (name, password, done) => {
        const user = await getUserByName(name)
        console.log("The user" + user)
        if (!user) {
            return done(null, false, { message: "No user with that name" })
        }
        try {

            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)

            } else {
                return done(null, false, { message: "incorrect password" })
            }

        } catch (err) {
            return done(err)
        }

    }
    passport.use(new PassportLocalStrategy({ usernameField: "name", passwordField: "password" }, authenticateuser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}




module.exports = initialize 