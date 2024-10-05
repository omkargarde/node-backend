import { AsyncHandler } from "../utils/asyncHandler.js";

const registerUser = AsyncHandler(async (req, res) => {
  return res.status(200).json({ message: "OK" });
});

export { registerUser };
