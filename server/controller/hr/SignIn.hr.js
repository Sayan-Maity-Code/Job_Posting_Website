
import Hr from "../../models/hr.model.js";

const SignInHr = async (req, res) => {
  const { hrEmail, hrPassword } = req.body;
  try {
    const isEmail = await Hr.findOne({ hrEmail });
    if (isEmail) {
     
      if (isEmail.hrPassword === hrPassword) {

        const authtoken = {
          id:Hr._id,
          email:Hr.hrEmail
        };

        res.cookie("token", authtoken, {
          httpOnly: true, // Prevents client-side JS access
          secure: true, // Only sent over HTTPS
          sameSite: "Strict", // Protect against CSRF
        });

        return res.status(200).json({
          success: true,
          message: "Login Successful",
          response: isEmail
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
