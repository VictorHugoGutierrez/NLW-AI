import "dotenv/config";
import { OpenAI } from "openai";

export const openai = new OpenAI({
  organization: "org-NNE5e80sFHkCLympMh5EvyRM",
  apiKey: process.env.OPENAI_KEY,
});
