import TicketCard from "@/components/TicketCard";

const getAllTickets = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/get-all-tickets", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("unable to get all tickets");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function page() {
  const { tickets } = await getAllTickets();
  return (
    <div className="p-4">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {tickets.map((ticket) => (
          <div key={ticket._id}>
            <TicketCard ticket={ticket} />
          </div>
        ))}
      </div>
    </div>
  );
}
