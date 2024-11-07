import { Schema, model } from "mongoose";

const waitlistSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  details: {
    stage: {
        type: String,
        enum: ['Prelims', 'Main', 'Interviews'],
        required: true,
    },
    prepDuration: {
        type: String,
        enum: ['Less than 1 year' , '1-2 years', '3+ years'],
    },
    workStatus: {
        type: String,
        enum: ['College Student', 'Full-Time Aspirant', 'Working Professional'],
    },
  },
});

const Waitlist = model("Waitlist", waitlistSchema);

export default Waitlist;
