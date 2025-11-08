"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Material UI</h1>
      <div className="flex gap-3 flex-wrap items-center">
        <TextField label="Email" />
        <Switch defaultChecked />
        <Slider defaultValue={50} className="w-56" />
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    </section>
  );
}
