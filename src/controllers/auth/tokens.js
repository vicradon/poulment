import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createTokens = async (user, secret, secret2) => {
  const createToken = jwt.sign(
    {
      user: { id: user[_id], role: user.role },
    },
    secret,
    {
      expiresIn: "1m",
    }
  );

  const createRefreshToken = jwt.sign(
    {
      user: { id: user._id },
    },
    secret2,
    {
      expiresIn: "7d",
    }
  );

  return Promise.all([createToken, createRefreshToken]);
};

export const refreshTokens = async (
  token,
  refreshToken,
  models,
  SECRET,
  SECRET_2
) => {
  let userId = -1;
  try {
    const {
      user: { id },
    } = jwt.decode(refreshToken);
    userId = id;
  } catch (err) {
    return {};
  }

  if (!userId) {
    return {};
  }

  const user = await models.User.findOne({ where: { id: userId }, raw: true });

  if (!user) {
    return {};
  }

  const refreshSecret = SECRET_2 + user.password;

  try {
    jwt.verify(refreshToken, refreshSecret);
  } catch (err) {
    return {};
  }

  const [newToken, newRefreshToken] = await createTokens(
    user,
    SECRET,
    refreshSecret
  );
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user,
  };
};

export const tryLogin = async (email, password, models, SECRET, SECRET_2) => {
  const user = await models.User.findOne({ where: { email }, raw: true });
  if (!user) {
    // user with provided email not found
    throw new Error("Invalid login");
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    // bad password
    throw new Error("Invalid login");
  }

  const [token, refreshToken] = await createTokens(
    user,
    SECRET,
    SECRET_2 + user.password
  );

  return {
    token,
    refreshToken,
  };
};
