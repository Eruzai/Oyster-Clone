import { fetchPosting, savePosting, fetchUsersJobs } from "../Controllers/InternController.js";
import { checkFrontEndRequestAuth } from "../Controllers/authController.js";
import express from "express";

const Internroutes = express.Router();

Internroutes.post("/save", checkFrontEndRequestAuth, savePosting);
Internroutes.post("/search", fetchPosting);
Internroutes.post("/savedjobs", checkFrontEndRequestAuth, fetchUsersJobs);

export default Internroutes;
