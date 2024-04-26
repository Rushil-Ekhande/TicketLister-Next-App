import TicketForm from "@/components/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/get-ticket/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("failed to get ticket");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Ticket({ params }) {
  const editMode = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (editMode) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticketData={updateTicketData} />;
}
