// import Problem from "../models/problemSchema.js";

import Problem from "../models/ProblemSchema.js";

export const getAIRecommendedProblems = async (req,res)=>{

  try{

    const problems = await Problem.find()
      .sort({ importanceScore: -1 })
      .limit(10)

    res.json(problems)

  }catch(error){

    res.status(500).json({message:error.message})

  }

}