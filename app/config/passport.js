import passportLocal from 'passport-local';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
const LocalStrategy = passportLocal.Strategy;
function passportInit(passport) {
    passport.use(
        new LocalStrategy(
            { usernameField: 'email' },
            async (email, password, done) => {
                //Login
                // Check if email exists
                try {
                    const user = await User.findOne({ email: email });
                    if (!user) {
                        return done(null, false, {
                            message: "Email isn't registered",
                        });
                    }
                    // To check password if the user exists
                    const passMatch = await bcrypt.compare(
                        password,
                        user.password
                    );
                    if (passMatch) {
                        return done(null, user, {
                            message: 'Login Successfull',
                        });
                    }
                    return done(null, false, {
                        message: 'Wrong username or password',
                    });
                } catch (error) {
                    return done(null, false, {
                        message: 'Something went wrong',
                    });
                }
            }
        )
    );
    // Storing data in session after successful login
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}

export { passportInit };
