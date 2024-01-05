"use client";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Audiences } from "@/components/Audiences";

const Membership = dynamic(() =>
  import("@/components/Membership").then((mod) => mod.Membership)
);

export default function Home() {
  return (
    <main>
      <Header />
      <Membership />
      <Audiences />
    </main>
  );
}
