"use client";

import { Input } from "antd";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <form className="max-w-lg space-y-4">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <Input.TextArea value={msg} onChange={e => setMsg(e.target.value)} rows={4} placeholder="How can we help?" />
      </div>
      <Button variant="contained" type="submit">Send</Button>
    </form>
  );
}
