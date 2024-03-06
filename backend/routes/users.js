const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/getuser", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).send(users);
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


router.get("/updateuser/:id", async (req, res) => {
    try {
		const userId = req.params.id
        const user = await User.findById(userId);
        if (!user)
            return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
		console.log("API ERROR:",error);
        res.status(500).json({success:false,message: "Internal Server Error" });
    }
});
router.put("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, password } = req.body;
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(password, salt);

        // Update user in the database
        const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, email, password:hashPassword }, { new: true });
console.log(updatedUser);
        // Respond with updated user data
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});




module.exports = router;

