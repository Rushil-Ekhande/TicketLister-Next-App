import dbConnect from "@/lib/db";
import ticketModel from "@/models/TicketModels";

export async function GET(request, { params }) {
  dbConnect();
  try {
    const { id } = params;
    const foundTicket = await ticketModel.findOne({ _id: id });
    return Response.json(
      {
        foundTicket,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: "failed to get the ticket",
      },
      { status: 500 }
    );
  }
}
