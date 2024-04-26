"use client";
import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TicketCard({ ticket }) {
  const router = useRouter();
  router.refresh();
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover hover:cursor-pointer rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 justify-between">
        <PriorityDisplay priority={ticket.priority} />
        <DeleteBlock id={ticket._id} />
      </div>
      <Link href={`/ticket-page/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex space-y-2">
          <div>
            <p className="text-xs my-2">{`${
              ticket.createdAt.split("T")[0]
            }`}</p>
            <ProgressBar progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-endf">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
}
