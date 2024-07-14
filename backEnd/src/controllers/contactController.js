const mongoose = require("mongoose");
const contacts = require("../models/contactModel");

async function createContact(req, res) {
  const { name, email, phoneNumber } = req.body;
  console.log(name, email, phoneNumber);
  if (!(name, email, phoneNumber)) {
    res.status(400).status({
      status: "error",
      message: "Required all field",
    });
  }
  const newContact = new contacts({ name, email, phoneNumber });

  await newContact.save();
  res.status(201).json({
    status: "success",
    message: "Contact successsfully created",
    data: {
      contacts: newContact,
    },
  });
}

async function getContact(req, res) {
  try {
    const contact = await contacts.find();
    if (!contact) {
      res.status(404).json({
        status: "error",
        message: "Contacts not found",
      });
    }
      res.status(201).json({
        status: "success",
        message: "contacts successfully fetched",
        data: {
          contact,
        },
      });
    }
   catch (error) {
    console.log(error);
  }
}

module.exports = {
  createContact,
  getContact
};
