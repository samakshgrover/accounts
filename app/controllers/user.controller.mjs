import db from "../models/db.mjs";
const User = db.users;

async function create(req, res) {
  const { name, email, password } = req.body;

  if (!(name || email || password)) {
    res.status(400).send({
      message: "Please provide complete details",
    });
    return;
  }

  try {
    const user = await User.create({ name, email, password });
    res.status(200).json(user);
  } catch (err) {
    console.error("What happend", err);
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
}

async function getUser(req, res) {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({
      message: "Please provide complete details",
    });
    return;
  }
  try {
    const user = await User.findAll({
      where: {
        id: id,
      },
    });
    res.status(200).json(user);
  } catch (err) {
    console.error("What happend", err);
    res.status(500).send({
      message: err.message || "Some error occurred while getting the User.",
    });
  }
}

async function getAll(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error("What happend", err);
    res.status(500).send({
      message: err.message || "Some error occurred while getting Users.",
    });
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { isActive, name } = req.body;

  try {
    const num = await User.update(
      { isActive, name },
      {
        where: {
          id: id,
        },
      }
    );
    if (num == 1) {
      res.send({
        message: "user was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    console.error("What happend", err);
    res.status(500).send({
      message: err.message || "Some error occurred while updating Users.",
    });
  }
}

async function activeUsers(req, res) {
  try {
    const users = await User.findAll({
      where: {
        isActive: true,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    console.error("What happend", err);
    res.status(500).send({
      message: err.message || "Some error occurred while getting active Users.",
    });
  }
}

async function inactiveUsers(req, res) {
  try {
    const users = await User.findAll({
      where: {
        isActive: false,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    console.error("What happend", err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while getting inactive Users.",
    });
  }
}

export { create, getUser, getAll, update, activeUsers, inactiveUsers };
