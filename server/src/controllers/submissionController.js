import Submission from "../models/Submission.js";


export const submitCode = async(req,res)=>{

 const {problemId, code} = req.body;

 const submission = await Submission.create({
   problem: problemId,
   code,
   user: req.user._id
 });

 res.json(submission);

};