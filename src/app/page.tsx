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
      <div className="flex justify-center ">
        <div className="grid gap-10 lg:grid-cols-custom-2 grid-cols-1 border-t-2 border-l-2 border-r-2 border-solid border-purple-gray p-10 rounded-t-3xl ">
          <Membership />
          <Audiences />
          <h2 className="sm:text-7xl text-3xl gradient-text lg:col-span-2 text-center font-bold mb-5 font-monts">
            Revolutionary <br /> Super Dashboard
          </h2>
          <h3 className="text-center font-monts text-white lg:col-span-2 sm:text-xl">
            Botly is an AI companion that provides personalized assistance and
            <br />
            improves online interactions.
          </h3>
          <button
            className="flex items-center justify-center bg-white w-56 h-10 lg:col-span-2 justify-self-center rounded-xl text-base font-bold font-monts hover:opacity-50"
            type="button"
            aria-label="Download for Mac"
          >
            Download for Mac
          </button>
          <h4 className="font-monts text-center lg:col-span-2 text-white opacity-50 text-sm -mt-5">
            Install via Setapp
          </h4>
        </div>
      </div>
    </main>
  );
}
