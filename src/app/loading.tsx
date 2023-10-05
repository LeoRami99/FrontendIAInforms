/* use client */
'use client'
import { Spinner } from "@nextui-org/react";
export default function Loading() {

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="card">
        <Spinner />
        <h2>Loading</h2>
      </div>
    </ div>
  )
}