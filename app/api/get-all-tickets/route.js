import { dbConnect } from "@/lib/db";
import ticketModel from "@/models/TicketModels";

export async function GET() {
  dbConnect();
  try {
    const tickets = await ticketModel.find({});
    return Response.json(
      {
        tickets: tickets,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        success: false,
        message: "Unable to get all ticket",
      },
      { status: 500 }
    );
  }
}
