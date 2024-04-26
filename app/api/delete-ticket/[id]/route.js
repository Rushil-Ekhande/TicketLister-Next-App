import { dbConnect } from "@/lib/db";
import ticketModel from "@/models/TicketModels";

export async function DELETE(req, { params }) {
  dbConnect();
  try {
    const { id } = await params;
    console.log(id);
    await ticketModel.findByIdAndDelete(id);
    return Response.json(
      {
        message: "ticket deleted",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
