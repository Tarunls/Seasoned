import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.openai.com/v1/engines/davinci-codex/completions",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer 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",
  },
});

export const generateResponse = async (message) => {
  try {
    const response = await instance.post("", {
      prompt: message,
      max_tokens: 60,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return "";
  }
};
