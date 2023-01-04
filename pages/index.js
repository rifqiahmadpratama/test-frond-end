import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar/index.jsx";
import FooterBar from "../components/FooterBar/index.jsx";
import { Avatar, Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image.js";
import { getHome } from "../redux/action/homeaction.js";

export default function Home() {
  const dispatch = useDispatch();
  const { home } = useSelector((state) => state.home);
  console.log("cek data = ", home);
  useEffect(() => {
    dispatch(getHome());
  }, []);

  return (
    <>
      <NavigationBar />
      <div class="container w-full mx-auto p-6 flex">
        <div class=" w-1/4 h-screen bg-white-400 ">
          <Card class="h-screen" href="#">
            <div class="flex  flex-col gap-2 self-center">
              <Image src={home.avatar_url} width={500} height={500} />
              <h1>{home.name}</h1>
              <h1>{home.bio}</h1>
            </div>
          </Card>
        </div>
        <div class="grow h-screen bg-emerald-400 p-4">
          <Card class="h-screen" href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
      <FooterBar />
    </>
  );
}
