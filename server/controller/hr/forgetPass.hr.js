import Hr from "../../models/hr.model.js";

const HrForgetPass = async (req, res) => {
  const { hrEmail, hrPassword } = req.body;
  try {
    const isEmail = await Hr.findOne({ hrEmail });
    if (isEmail) {
      const updatePass = await Hr.findOneAndUpdate(
        { hrEmail },
        { $set: { hrPassword } },
        { new: true }
      );
      return res.status(200).json({
        success: true,
        message: "Update SuccessFul",
        data: updatePass,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Email dose not exist",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default HrForgetPass;