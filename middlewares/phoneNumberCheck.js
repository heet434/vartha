import {phone} from 'phone';

const phoneNumberCheck = (req, res, next) => {
    try {
        const phoneNumber = req.body.phoneNumber;
        if(!phoneNumber){
            console.log('Request without phone number', req.body);
            return res.status(400).json({ message: 'Phone number is required', success: false });
        }
        if(phoneNumber.length < 10){
            console.log('Phone number too short', req.body);
            return res.status(400).json({ message: 'Phone number is too short', success: false });
        }
        const phoneNumberCheck = phone(phoneNumber, { country: 'IN' });
        if(!phoneNumberCheck.isValid){
            console.log('Invalid phone number', req.body);
            return res.status(400).json({ message: 'Invalid phone number', success: false });
        }
        req.body.phoneNumber = phoneNumberCheck.phoneNumber;
        next();
    } catch (error) {
        console.log('Error in phone number check', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

export default phoneNumberCheck;