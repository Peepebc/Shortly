"use client"
import Image from "next/image";
import shortly from "/next.svg"
import React, { useEffect, useState } from "react";
import prisma from '../libs/db';
import { Prisma } from "@prisma/client";

interface FormElements extends HTMLFormControlsCollection {
  url: HTMLInputElement
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}


export default function Home() {
  
  async function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
      event.preventDefault()
      console.log(event.currentTarget.elements.url.value)
  }

  return (
    <>
      <header className="w-full	flex justify-between md:justify-center py-10 relative px-5">
        <Image alt="logo" className="hidden md:block" width={250} height={100} src="/SHORTLY.svg"/>
        <Image alt="logoMobile" className="block md:hidden"  width={220} height={100} src="/SHORTLY.svg"/>
        <button type="button" className="border border-[#AFE3C0] hover:bg-[#AFE3C0] md:bg-transparent p-2 text-center ease-in-out duration-300 bg-[#AFE3C0]
        px-5 md:h-[40.28px] rounded-lg text-black md:text-white hover:text-black text-sm md:text-xl font-medium absolute right-5">Login</button>
      </header>
      <main>
        <div className="flex justify-center py-10">
          <div className="flex md:w-1/3 flex-col gap-5 text-center">
            <h1 className="text-4xl font-extrabold leading-none tracking-tight">Acortador de <span className="text-[#AFE3C0]">URLs</span></h1>
            <h2 className="text-lg font-medium leading-none tracking-tight ">Acorta enlaces de manera gratuita</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex border px-4 border-white rounded-2xl justify-between items-center w-full">
                <input id="url" type="text" placeholder="www.example.com" className="bg-transparent p-2 focus:outline-none focus:bg-transparent md:w-[500px]"/>
                <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
            </form>
          </div>
        </div>
      </main>

    </>
  );
}
