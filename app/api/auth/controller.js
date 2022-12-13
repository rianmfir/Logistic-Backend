const { User } = require('../../db/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    signin: async (req, res, next) => {
        try {
            const { msisdn, username, name, password } = req.body;

            const checkUser = await User.findOne({ where: { msisdn: msisdn } });

            if (checkUser) {
                const checkPassword = bcrypt.compareSync(password, checkUser.password);
                if (checkPassword) {
                    const token = jwt.sign({
                        user: {
                            id: checkUser.id,
                            msisdn: checkUser.msisdn,
                            name: checkUser.name,
                            username: checkUser.username,
                        }
                    },
                        config.secretKey
                    );
                    res.status(200).json({ message: 'Success Signin', data: token });
                } else {
                    res.status(403).json({ message: 'Invalid Password' });

                }

            } else {
                res.status(403).json({ message: 'Invalid Number' });
            }

        } catch (err) {
            next(err);
        }
    },

    signup: async (req, res, next) => {
        try {
            const { msisdn, name, username, password } = req.body;

            const checkMsisdn = await User.findOne({ where: { msisdn: msisdn } });
            if (checkMsisdn) {
                return res.status(403).json({ message: 'Number registered' });
            }

            const checkUsername = await User.findOne({ where: { username: username } });
            if (checkUsername) {
                return res.status(403).json({ message: 'Username registered' });
            }

            // const newNumber = msisdn[0] === 0 ? 

            const user = await User.create(
                {
                    id: uuidv4(),
                    // msisdn: `62${msisdn}`,
                    msisdn,
                    name,
                    username,
                    password: bcrypt.hashSync(password, 10),
                }
            );

            delete user.dataValues.password;

            res.status(201).json({
                message: "Succes SignUp",
                data: user,
            })

        } catch (err) {
            next(err);
        }
    }
}