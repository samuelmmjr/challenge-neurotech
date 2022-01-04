const contactService = require('../service/contact');

const createContact = async (req, res, next) => {
    try {
        const { status, message, error } = await contactService.createContact(req.body);
        if (error) {
            return res.status(status).json({ message: error });
        }
        return res.status(status).json({ message });
    } catch (error) { next({ status: 500, error }); }
}



module.exports = { createContact };
