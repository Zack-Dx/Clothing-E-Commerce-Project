import { User } from '../../models/user.js';
import bcrypt from 'bcrypt';
function authController() {
    return {
        //Register (GET ROUTE)
        register(req, res) {
            res.render('auth/register');
        },
        login(req, res) {
            res.render('auth/login');
        },
        //Registration (POST ROUTE)
        async postRegister(req, res) {
            try {
                // Validation Check
                const { name, email, password, cpassword } = req.body;
                if (!name || !email || !password || !cpassword) {
                    req.flash('error', 'All fields are required');
                    // To resend the filled name and email
                    req.flash('name', name);
                    req.flash('email', email);
                    return res.redirect('/register');
                } else if (password !== cpassword) {
                    req.flash('error', 'Passwords do not match. ');
                    req.flash('name', name);
                    req.flash('email', email);
                    return res.redirect('/register');
                }

                // Checking if the user already exits with the same email
                const userExists = await User.exists({ email: email });
                if (userExists) {
                    req.flash('error', 'Email already exists');
                    req.flash('name', name);
                    req.flash('email', email);
                    return res.redirect('/register');
                }

                //Hashing Password
                const hashedPassword = await bcrypt.hash(password, 11);
                // Creating a New User
                const user = new User({
                    name,
                    email,
                    password: hashedPassword,
                    cpassword: hashedPassword,
                });
                //Saving User
                const userSaved = await user.save();
                if (userSaved) {
                    return res.redirect('/');
                } else {
                    req.flash('error', 'Something went wrong');
                    return res.redirect('/');
                }
            } catch (error) {
                req.flash('error', 'Something went wrong');
                return res.redirect('/register');
            }
        },
    };
}

export { authController };
