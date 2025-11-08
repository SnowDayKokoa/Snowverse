"use client";
import { Button, Input, DatePicker, Select } from "antd";

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Ant Design</h1>
      <div className="flex gap-3 flex-wrap items-center">
        <Input placeholder="Name" className="w-56" />
        <DatePicker />
        <Select className="w-56" options={[{ value: "x", label: "Option X" }]} placeholder="Pick one" />
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
      </div>
    </section>
  );
}
