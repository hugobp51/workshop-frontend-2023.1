import { FlyingSaucer } from "phosphor-react";
import React from "react";

export function Loading() {
  return (
    <>
    <div
      className="flex items-center justify-center
         w-screen h-screen mx-auto">
      <FlyingSaucer className="w-20 h-20 animate-spin text-white"/>
    </div>
    </>
  );
}
