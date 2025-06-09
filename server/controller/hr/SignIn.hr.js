import Hr from "../../models/hr.model.js";

const SignInHr = async (req, res) => {
  const { hrEmail, hrPassword } = req.body;
  try {
    const isEmail = await Hr.findOne({ hrEmail });
    if (isEmail) {
      const isPassword = await Hr.findOne({ hrPassword });
      if (isPassword) {
        return res.status(200).json({
          success: true,
          message: "Login Successful",
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "Invalid email",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export default SignInHr;
