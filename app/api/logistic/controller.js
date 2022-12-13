const { Logistic } = require('../../db/models');
const { Op } = require('sequelize');


module.exports = {
    getAllLogistic: async (req, res, next) => {
        try {

            const { destination_name = '', origin_name = '' } = req.query;

            let condition = {};

            if (destination_name !== '') {
                condition = { ...condition, destination_name: { [Op.like]: `%${destination_name}%` } };
            }

            if (origin_name !== '') {
                condition = { ...condition, origin_name: { [Op.like]: `%${origin_name}%` } };
            }

            const logistic = await Logistic.findAll({
                where: condition
            });

            res.status(200).json({
                message: "Success get all logistic",
                data: logistic,
            });

        } catch (err) {
            next(err);
        }

    },

    createLogistic: async (req, res, next) => {
        try {
            // const { logistic_name, amount, destination_name, origin_name, duration } = req.body;
            const { payload } = req.body;

            const logistic = await Logistic.bulkCreate(
                payload,
            );

            res.status(201).json({
                message: "Succes create Logistic",
                data: logistic,
            });

        } catch (err) {
            next(err);
        }
    },

    updateLogistic: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { logistic_name, amount, destination_name, origin_name, duration } = req.body;

            const checkLogistic = await Logistic.findOne({
                where: {
                    id: id
                },
            });

            console.table(checkLogistic);

            if (!checkLogistic) {
                return res.status(404).json({
                    message: "id logistic not found",
                })
            }

            const logistic = await checkLogistic.update({
                logistic_name,
                amount,
                destination_name,
                origin_name,
                duration
            });

            res.status(200).json({
                message: "Success update logistic",
                data: logistic,
            })

        } catch (err) {
            next(err);
        }
    },

    deleteLogistic: async (req, res, next) => {
        try {
            const { id } = req.params;

            const logistic = await Logistic.findOne({
                where: {
                    id: id
                }
            });

            if (!logistic) {
                return res.status(404).json({
                    message: 'Id logistic not found'
                });
            };

            logistic.destroy();

            return res.status(200).json({
                message: 'Success delete logistic',
                data: logistic,
            });

        } catch (err) {
            next(err);
        }
    }
}