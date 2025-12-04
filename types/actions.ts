"use server";

import { profileShema } from "./schema";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedField = profileShema.parse(rawData);
    console.log(validatedField);
    return { message: "profile created" };
  } catch (error) {
    console.log(error);
    return { message: `${error}` };
  }
};
