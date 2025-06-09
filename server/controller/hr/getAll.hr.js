import Hr from "../../models/hr.model.js";

const getAllHr = async (req, res) => {
  try {
    const Getallhr = await Hr.find();
    if (Getallhr) {
      return res.status(200).json({
        success: true,
        message: "All hr found successful",
        data: Getallhr,
      });
    }

    return res.status(404).json({
      success: false,
      message: "Hr found faild",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export default getAllHr;
