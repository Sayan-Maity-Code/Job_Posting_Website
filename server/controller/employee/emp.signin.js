import Employee from "../../models/employee.model.js";

const empSignIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const isEmail = Employee.findOne({ email });
        if (isEmail) {
            const isPassword = Employee.findOne({ password });
            if (isPassword) {
                return res.status(200).json({
                    status: true,
                    message: "Login Successful"
                });
            }
            else {
                return res.status(404).json({
                    status: false,
                    message: "Invalid Password"
                });
            }
        }
        else {
            return res.status(404).json({
                status: false,
                message: "Invalid Mail"
            });

        }
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({
          success: false,
          message: "server error",
        });
        
    }
};

export default empSignIn;