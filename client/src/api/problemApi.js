import axios from "axios";

export const fetchProblems = async () => {
  // const res = await axios.get("/api/problems");
  const res = await axios.get("http://localhost:3000/api/problems");
  return res.data;
};


export const fetchAIRecommendedProblems = async () => {
  const res = await axios.get("http://localhost:3000/api/problems/ai-recommended")
  return res.data
}