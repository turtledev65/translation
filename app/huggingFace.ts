import { HfInference } from "@huggingface/inference";

const inference = new HfInference(process.env.HF_ACCES_TOKEN);

export default inference;
