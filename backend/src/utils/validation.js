import validator from "validator";

const validateSignUpData = (req) => {
  const { name, email, password } = req.body;

  if (!name) {
    throw new Error("Name is required.");
  } else if (name.trim().length < 3 || name.trim().length > 50) {
    throw new Error("Name must be between 3 and 50 characters.");
  }

  if (!email) {
    throw new Error("Email is required.");
  } else if (!validator.isEmail(email)) {
    throw new Error("Not a valid email ID.");
  }

  if (!password) {
    throw new Error("Password is required.");
  } else if (password.trim().length < 8 || password.trim().length > 17) {
    throw new Error("Password must be between 8 and 16 characters.");
  } else if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw new Error(
      "Password must include at least one lowercase letter, one uppercase letter, one number, and one symbol."
    );
  }
};

const validateProductAddData = (req) => {
  const { name, description, price, category, subCategory, sizes, date } =
    req.body;

  if (!name) {
    throw new Error("Product name is required.");
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    throw new Error("Product name must be between 3 and 100 characters.");
  }

  if (!description) {
    throw new Error("Product description is required.");
  } else if (
    description.trim().length < 10 ||
    description.trim().length > 500
  ) {
    throw new Error(
      "Product description must be between 10 and 500 characters."
    );
  }

  if (!price) {
    throw new Error("Product price is required.");
  } else if (isNaN(price) || Number(price) < 1) {
    throw new Error("Product price must be a number greater than 0.");
  }

  if (!category) {
    throw new Error("Product category is required.");
  } else if (!["Men", "Women", "Kids"].includes(category)) {
    throw new Error("Product category must be one of: Men, Women, Kids.");
  }

  if (!subCategory) {
    throw new Error("Product sub-category is required.");
  } else if (subCategory.trim().length < 3 || subCategory.trim().length > 50) {
    throw new Error(
      "Product sub-category must be between 3 and 50 characters."
    );
  }

  if (!sizes) {
    throw new Error("Product sizes are required.");
  }
};

export { validateSignUpData, validateProductAddData };
