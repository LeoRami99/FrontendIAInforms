'use client'
import Image from 'next/image'
import Navbar from './components/navbar/navbar.component'
import { NextUIProvider } from '@nextui-org/react'
import { useEffect, useState } from 'react'




export default function Home() {
  


  

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <header>
        <div className="container">
          <h1>Generative IA References</h1>
        </div>
        
      </header>
    </>
  )
}
