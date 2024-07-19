import axios from "axios";

export const getSlides = async () => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_PUBLIC_API + "/api/banners"
    );

    return data;
  } catch (error) {
    console.log("Failed fetch slides!");
  }
};

export const getAdvantages = async () => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_PUBLIC_API + "/api/posts"
    );

    return data;
  } catch (error) {
    console.log("Failed fetch advantages!");
  }
};

export const getServices = async () => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_PUBLIC_API + "/api/portfolios"
    );

    return data;
  } catch (error) {
    console.log("Failed fetch services!");
  }
};

export const getTranslations = async (lang) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_PUBLIC_API + `/api/translations/${lang}`
    );

    return data;
  } catch (error) {
    console.log("Failed fetch langs!");
  }
};

export const postForm = async (name, email, descriptions) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_PUBLIC_API + "/api/zayavkas",
      {
        first_name: name,
        email,
        descriptions,
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.error("Validation Error:", error.response.data);
      throw new Error("Validation error occurred");
    } else {
      console.error("Request failed:", error.message);
      throw error;
    }
  }
};
