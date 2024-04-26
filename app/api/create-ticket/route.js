import { dbConnect } from "@/lib/db";
import ticketModel from "@/models/TicketModels";

export async function POST(request) {
  dbConnect();
  try {
    const body = await request.json();
    const ticketData = body.formData;
    const newTicket = await ticketModel.create({
      title: ticketData.title,
      description: ticketData.description,
      category: ticketData.category,
      priority: ticketData.priority,
      progress: ticketData.progress,
      status: ticketData.status,
    });
    await newTicket.save();
    return Response.json(
      {
        success: true,
        message: "created a new ticket",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        success: false,
        message: "Unable to create ticket",
      },
      { status: 500 }
    );
  }
}
