"use client"
import React, { Component } from 'react'
import Navbar from '../components/navbar/navbar.component'

export default class page extends Component {
  render() {
    return (
        <>
            <Navbar>
            </Navbar>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="form">
                  <div className="input-group">
                    <label htmlFor=""></label>
                    <input type="text" placeholder='Ingresa las palabras'/>
                  </div>
                </div>
            </main>
        </>
    )
  }
}
