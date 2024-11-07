import Waitlist from "../models/waitlistModel.js";

const addToWaitlist = async (req, res) => {
    try {
        const waitlist = new Waitlist(req.body);
        await waitlist.save();
        res.status(201).json({ message: 'Added to waitlist', success: true });
    }
    catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
}

const getWaitlist = async (req, res) => {
    try {
        const waitlist = await Waitlist.find();
        res.status(200).json({ waitlist, success: true });
    }
    catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
}

const getReponseByPhoneNumber = async (req, res) => {
    try {
        const phoneNumber = req.params.phoneNumber;
        const response = await Waitlist.findOne({ phoneNumber: phoneNumber });
        if (!response) {
            return res.status(404).json({ message: 'Phone number not found', success: false });
        }
        res.status(200).json({response, success: true});
    }
    catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
}

export { addToWaitlist, getWaitlist, getReponseByPhoneNumber };