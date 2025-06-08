import Hr from "../../models/hr.model.js";

const SignUpHr = async (req, res) => {
  const { hrEmail, hrPassword } = req.body;
  try {
    const isCreate = await Hr.create({ hrEmail, hrPassword });
    if (!isCreate) {
      return res.status(404).json({
        status: false,
        message: "Hr Create faild",
      });
    }
    return res.status(200).json({
      success: true,
      message: " Hr Created SuccessFul",
      response: isCreate,
      
    })
  } catch (error) {}
};

export default SignUpHr;
