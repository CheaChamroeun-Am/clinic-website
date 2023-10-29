import React from "react";
import { FiSend } from "react-icons/fi";

import Button from "./Button";

const Appointment = () => {
  return (
    <div className="section">
      <h1 className="text-center">Book Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="mr-0 lg:mr-10">
          <label className="font-bold text-main">FullName</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg mt-3"
            placeholder="Your Name*"
          />
        </div>

        <div>
          <label className="font-bold text-main">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg mt-3"
            placeholder="Phone E-mail*"
          />
        </div>
        <div className="mr-0 lg:mr-10">
          <label className="font-bold text-main">Phone</label>
          <input
            type="number"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border mt-3 rounded-lg"
            placeholder="Your Phone"
          />
        </div>
        <div>
          <label className="font-bold text-main">Subject</label>
          <input
            type="text"
            id="text"
            name="Subject"
            className="w-full px-4 py-2 border mt-3 rounded-lg"
            placeholder="Subject"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="font-bold text-main">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 border mt-3 rounded-lg"
            placeholder="Enter your message"
          />
        </div>

        <div className="col-span-1 md:col-span-2 mx-auto">
          <Button icon={FiSend} title="Submit" iconPosition="after" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
