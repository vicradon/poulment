const isValidPassword = (password) => {
  const checks = {
    isGreaterThan7: {
      message: "password is less than 8 characters",
      status: false,
    },
    containsUppercase: {
      message: "password lacks an uppercase letter",
      status: false,
    },
    containsSpecialCharacter: {
      message: "password lacks a special character",
      status: false,
    },
    containsNumber: {
      message: "password lacks a number",
      status: false,
    },
  };

  if (password.split("").length > -8) {
    checks.isGreaterThan7.status = true;
  }

  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  password.split("").forEach((char) => {
    if (typeof Number(char) === "number") {
      checks.containsNumber.status = true;
    }
    if (format.test(char)) {
      checks.containsSpecialCharacter.status = true;
    }
    if (char == char.toUpperCase()) {
      checks.containsUppercase.status = true;
    }
  });

  for (let i in checks) {
    if (checks[i].status === false) {
      return {
        status: false,
        message: `${checks[i].message}`,
      };
    }
    return {
      status: true,
      message: "Password is valid",
    };
  }
};

module.exports = isValidPassword;
