import User from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send({
            data: users
        })
    } catch (err) {
        console.log(err);
    }
}

export const getUserByNIK = async (req, res) => {
    try {
        const userByNIK = await User.findOne({
            where: {
                nik: req.params.nik
            }
        });

        const userByAll = await User.findOne({
            where: {
                nama: req.body.nama,
                tempat: req.body.tempat,
                tanggal_lahir: req.body.tanggal_lahir
            }
        });

        let status = ""

        if (userByNIK) {
            status = "blacklist";
        } else if (userByAll) {
            if (userByAll.nama === req.body.nama && userByAll.tempat === req.body.tempat && userByAll.tanggal_lahir === req.body.tanggal_lahir) {
                status = "blacklist";
            }
        } else {
            status = "clear";
        }

        res.status(200).send({
            "status": status
        });
    } catch (err) {
        console.log(err);
    }
}

export const addUser = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                nik: req.body.nik
            }
        });

        if (user.length === 0) {
            await User.create(req.body);
            res.status(200).send({
                "message": "Data user berhasil ditambahkan"
            });
        } else {
            res.status(409).send({
                "message": "Data user sudah ada"
            });
        }
    } catch (err) {
        console.log(err);
    }
}

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                nik: req.params.nik
            }
        });

        res.status(200).send({
            "message": "Data user berhasil diupdate"
        });
    } catch (err) {
        console.log(err);
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                nik: req.params.nik
            }
        });
        res.status(200).send({
            "message": "Data user berhasil dihapus"
        });
    } catch (err) {
        console.log(err);
    }
}