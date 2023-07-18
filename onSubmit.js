const User = require("../models/contactModel");

//1:) logout user by putting jwt ==null in user's browser cookie
const onSubmitControl = catchAsync(async (req, res, next) => {
    await User.update({...req.body});
    res.status(200).json({ status: "success" });
});

module.exports = {
    onSubmitControl
};
