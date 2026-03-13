import Problem from "../models/ProblemSchema.js";


export const getProblems = async (req,res)=>{

 const problems = await Problem.find();

 res.json(problems);

};