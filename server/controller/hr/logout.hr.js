const LogoutHr = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    success: true,
    message: "hr Logout successful",
  });
};

export default LogoutHr;
