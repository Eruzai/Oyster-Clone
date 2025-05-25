import mongoose from "mongoose";

//*timestamps: true- will add createdAt and updatedAt
const InternshipSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    saveCategory: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
      required: false,
    },
    companyWebsite: {
      type: String,
      required: false,
    },
    companyLinkedIn: {
      type: String,
      required: false,
    },
    companyXHandle: {
      type: String,
      required: false,
    },
    companyGitHub: {
      type: String,
      required: false,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    jobType: {
      type: Array,
      required: false,
    },
    remoteJob: {
      type: Boolean,
      required: false,
    },
    jobCity: {
      type: String,
      required: false,
    },
    jobCountryCode: {
      type: String,
      required: false,
    },
    jobCountryName: {
      type: String,
      required: false,
    },
    jobRegion: {
      type: String,
      required: false,
    },
    latitude: {
      type: Number,
      required: false,
    },
    longitude: {
      type: Number,
      required: false,
    },
    published: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    experienceLevel: {
      type: String,
      required: false,
    },
    applicationURL: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: false,
    },
    salary_min: {
      type: Number,
      required: false,
    },
    salary_max: {
      type: Number,
      required: false,
    },
    salary_currency: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Internship = mongoose.model("Internship", InternshipSchema);
