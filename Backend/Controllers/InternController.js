import { User } from "../models/UserModel.js";
import { Internship } from "../models/InternshipModel.js";
import axios from "axios";
import buildQuery from "../Utils/buildSearchQuery.js";

export const savePosting = async (req, res) => {
  try {
    if (!req.body.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    ``;

    const userId = req.body.user._id;
    const posting = req.body.job;

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingPosting = await Internship.findOne({
      user: userId,
      jobTitle: posting.title,
    });
    if (existingPosting) {
      return res.status(400).json({ message: "Posting Already Exists" });
    }

    const newPost = new Internship({
      user: userId,
      saveCategory: 'Saved',
      companyName: posting.company.name,
      companyLogo: posting.company.logo,
      companyWebsite: posting.company.website_url,
      companyLinkedIn: posting.company.linkedin_url,
      companyXHandle: posting.company.twitter_handle,
      companyGitHub: posting.company.github_url,
      jobTitle: posting.title,
      jobLocation: posting.location,
      jobType: posting.types,
      remoteJob: posting.has_remote,
      jobCity: posting.cities.name,
      jobCountryCode: posting.countries.code,
      jobCountryName: posting.countries.name,
      jobRegion: posting.regions.name,
      latitude: posting.cities.latitude,
      longitude: posting.cities.longitude,
      published: posting.published,
      description: posting.description,
      experienceLevel: posting.experience_level,
      applicationURL: posting.application_url,
      language: posting.language,
      salary_min: posting.salary_min,
      salary_max: posting.salary_max,
      salary_currency: posting.salary_currency,
    });

    await newPost.save();

    res.status(200).json({ message: "Posting saved successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const fetchPosting = async (req, res) => {
  const query = buildQuery(req.body)
  try {
    const response = await axios.get(
      `https://jobdataapi.com/api/jobs/?${query}`
    );
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching data", err);
    res.status(500).json({ message: "Failed to fetch data" }, err.message);
  }
};

export const fetchUsersJobs = async (req, res) => {
  try {
    if (!req.body.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    ``;
    const userId = req.body.user._id;

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const savedPostings = await Internship.find({
      user: userId
    });

    res.status(200).json(savedPostings);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}
