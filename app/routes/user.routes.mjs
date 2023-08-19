import express from "express";
import {
  activeUsers,
  create,
  getAll,
  getUser,
  inactiveUsers,
  update,
} from "../controllers/user.controller.mjs";

const router = express.Router();

router.post("/", create);
router.get("/all", getAll);
router.get("/active", activeUsers);
router.get("/inactive", inactiveUsers);
router.get("/:id", getUser);
router.patch("/:id", update);

export default router;
