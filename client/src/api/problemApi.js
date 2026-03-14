import axios from "axios";

export const fetchProblems = async () => {
  // const res = await axios.get("/api/problems");
  const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/problems`);
  return res.data;
};


export const fetchAIRecommendedProblems = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/problems/ai-recommended`)
  return res.data
}