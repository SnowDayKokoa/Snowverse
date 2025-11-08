"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");
  const [city, setCity] = useState<any>(null);

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">PrimeReact</h1>
      <div className="flex gap-3 items-center">
        <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type here" />
        <Button label="Action" icon="pi pi-bolt" />
      </div>
      <Dropdown
        value={city}
        onChange={(e) => setCity(e.value)}
        options={[{ label: "NYC", value: "nyc" }, { label: "LA", value: "la" }]}
        placeholder="Select a city"
      />
    </section>
  );
}
