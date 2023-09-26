'use client';
import './style.css';
import {Spinner} from "@nextui-org/react";
export default function Loading() {
    
    return (
      <div className="container mx-auto flex justify-center items-center h-screen">
        <Spinner />
      </div>
    )
  }