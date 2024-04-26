import ticketModel from "@/models/TicketModels";

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    const ticketToUpdate = await ticketModel.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return Response.json({
      message: "ticket updated",
    });
  } catch (error) {
    console.log(error);
  }
}
