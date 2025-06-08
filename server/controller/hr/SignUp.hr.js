import Hr from "../../models/hr.model.js";

const SignUpHr = async (req, res) => {
  const { hrName, hrEmail, hrPassword } = req.body;
  console.log(hrName, hrEmail, hrPassword);
  try {
    const isCreate = await Hr.create({ hrName, hrEmail, hrPassword });
    console.log("result",isCreate)
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
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export default SignUpHr;
