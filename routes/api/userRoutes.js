const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriends,
  removeFriends,
} = require("../../controllers/UserController");

// /api/students
router.route("/").get(getUsers).post(createUser);

// /api/students/:studentId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(addFriends)
  .delete(removeFriends);

module.exports = router;
