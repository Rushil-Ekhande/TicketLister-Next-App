"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TicketForm({ ticketData }) {
  const router = useRouter();

  const editMode = ticketData._id == "new" ? false : true;
  const handleOnchange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const response = await fetch(`/api/update-ticket/${ticketData._id}`, {
          method: "PUT",
          body: JSON.stringify({ formData }),
          "content-type": "application/json",
        });
        if (!response.ok) {
          throw new Error("Failed to update new ticket");
        }
      } else {
        const response = await fetch("/api/create-ticket", {
          method: "POST",
          body: JSON.stringify({ formData }),
          "content-type": "application/json",
        });
        if (!response.ok) {
          throw new Error("Failed to create new ticket");
        }
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const startingData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "hardware problem",
  };

  if (editMode) {
    startingData.title = ticketData.title;
    startingData.description = ticketData.description;
    startingData.priority = ticketData.priority;
    startingData.progress = ticketData.progress;
    startingData.status = ticketData.status;
    startingData.category = ticketData.category;
  }

  const [formData, setFormData] = useState(startingData);
  return (
    <div className="flex justify-center p-4 w-[70%] m-auto">
      <form className="flex flex-col w-full gap-2" onSubmit={handelOnSubmit}>
        <h3>{editMode ? "Update your ticket" : "Create your ticket"}</h3>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleOnchange}
          required={true}
          value={formData.title}
          className="text-nav p-2 rounded-md m-2"
        />
        <label htmlFor="title">description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          onChange={handleOnchange}
          required={true}
          value={formData.description}
          className="text-nav p-2 rounded-md m-2"
          rows={5}
        />
        <label>category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleOnchange}
          className="text-nav p-2 rounded-md"
        >
          <option value="hardware problem">hardware problem</option>
          <option value="software problem">software problem</option>
          <option value="project problem">project problem</option>
        </select>

        <label htmlFor="priority">priority</label>
        <div className="flex gap-2">
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleOnchange}
            value={2}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleOnchange}
            value={1}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleOnchange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>

          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleOnchange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>

          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleOnchange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleOnchange}
        />
        <p>{formData.progress}</p>
        <label>Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleOnchange}
          className="text-nav
          p-2
          rounded-md"
        >
          <option value="not started">not started</option>
          <option value="started">started</option>
          <option value="done">done</option>
        </select>
        <input
          type="submit"
          value={editMode ? "Update Ticket" : "Create Ticket"}
          className="btn py-3"
        />
      </form>
    </div>
  );
}
