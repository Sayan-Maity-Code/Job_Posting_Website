import Hr from "../../models/hr.model.js";

const HrcreateProfile = async (req, res) => {
  const { hrid, companyName, companyLogo, website, description } = req.body;

  try {
    const profileCreate = await Hr.findByIdAndUpdate(
      hrid,
      {
        companyName,
        companyLogo,
        website,
        description,
        isProfileComplete: true,
      },
      { new: true }
    );
    return res.status(201).json({
      success: true,
      message: "Profile Create successFul",
      data: profileCreate,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export default HrcreateProfile;
