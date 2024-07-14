import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";

export function CreateContact() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // create post function

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4002/api/create-contact",
        { name, email, phoneNumber }
      );

      if (response.status === 201) {
        console.log("successfully created", response);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between p-5"></div>
        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Write your story
          </Typography>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Name
            </Typography>
            <div onChange={(e) => setName(e.target.value)}>
              <Input label="Name" />
            </div>
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Email
            </Typography>
            <div onChange={(e) => setEmail(e.target.value)}>
              <Input label="Email" />
            </div>
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Phone Number
            </Typography>
            <div onChange={(e) => setPhoneNumber(e.target.value)}>
              <Input label="Phonenumber" />
            </div>
          </div>
        </DialogBody>

        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            <Link to="/"> cancel</Link>
          </Button>
          <Button variant="gradient" color="gray" onClick={handleCreate}>
            Add
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
