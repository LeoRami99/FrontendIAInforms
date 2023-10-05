/* use client */
'use client'
import React, { Component } from 'react'
import Navbar from '../components/navbar/navbar.component'
import { Input } from "@nextui-org/react";
import { Card, CardBody, Image, Button, Progress, Textarea } from "@nextui-org/react";
import './style.css';
import { useState } from 'react';

export default function page() {
  const [count, setCount] = useState(0);

  const nextSection = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Navbar>
      </Navbar>
      <div className="container mx-auto h-screen">
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className='titulo-ia'>Generative <span>IA References</span></h1>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
          >
            <CardBody>
              <div className='flex justify-center items-center flex-col gap-2 w-[510px]'>
                {count === 0 ? (
                  <>
                    <div className='flex justify-center items-center'>
                      <img src="https://ouch-cdn2.icons8.com/b9GM9agkB2kSOnrdxQ9VaO7APdHN_E718A2fnK5kwLQ/rs:fit:736:736/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy91cGxvYWRz/LzI4L2YzNzA2YTky/LWYxYzctNDI2NS05/MjhlLTBmZGRmY2Q0/YmRmOC5wbmc.png" alt="" className='w-44' />
                    </div><div className='flex justify-center items-center flex-col p-5'>
                      <h1 className='text-center'>¡Bienvenido!</h1>
                      <p>En esta sección tendras la posibilidad de colocar un máximo de 50 palabras separadas por ','</p>
                      <p>y de subir tu documento con el fin de que nuestra inteligencia haga su trabajo de buscar las mejores referencias en internet</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='flex justify-center items-center'>
                      <img src="https://ouch-cdn2.icons8.com/b9GM9agkB2kSOnrdxQ9VaO7APdHN_E718A2fnK5kwLQ/rs:fit:736:736/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy91cGxvYWRz/LzI4L2YzNzA2YTky/LWYxYzctNDI2NS05/MjhlLTBmZGRmY2Q0/YmRmOC5wbmc.png" alt="" className='w-44' />
                    </div>
                      <Textarea
                        label="Palabras clave"
                        labelPlacement="outside"
                        placeholder="Ingresa las palabras clave separadas por ','"
                      />
                      <Input

                        type="file"
                      />
                  </>
                )}
                {count === 0 ? (
                  <>
                    <Button color="secondary" variant="ghost" onClick={nextSection}>
                    Siguiente
                    </Button>
                  </>
                  ): count === 1 ? (
                  <>
                    <Button color="secondary" variant="ghost" >
                    Enviar
                    </Button>
                  </>)
                  : (
                  <>
                    <Button color="secondary" variant="ghost" onClick={nextSection}>
                    Finalizar
                    </Button>
                  </>
                  )}
              </div>
            </CardBody>

          </Card>
        </div>
      </div>
    </>
  )
}
