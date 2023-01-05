import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar/index.jsx";
import FooterBar from "../components/FooterBar/index.jsx";
import { Avatar, Button, Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image.js";
import { getHome } from "../redux/action/homeaction.js";
import { getRepo } from "../redux/action/repoaction.js";

export default function Home() {
  const dispatch = useDispatch();
  const { home } = useSelector((state) => state.home);
  const { repo } = useSelector((state) => state.repo);
  console.log("cek data = ", repo);
  useEffect(() => {
    dispatch(getHome());
    dispatch(getRepo());
  }, []);

  return (
    <>
      <NavigationBar />
      <div class="container h-full mx-auto  p-6 flex mb-10">
        <div class=" w-1/4 h-screen bg-white-400 ">
          <Card class="h-screen" href="#">
            <div class="flex  flex-col gap-2 self-center">
              <Image src={home.avatar_url} width={500} height={500} />
              <h1 class="text-base font-bold">{home.name}</h1>
              <h1 class="text-base">{home.bio}</h1>
              <div className="flex flex-wrap gap-2 w-auto text-sm">
                <div>
                  <Button color="success" pill={true} class="text-sm">
                    {home.followers + " followers"}
                  </Button>
                </div>

                <div>
                  <Button color="success" pill={true} class="text-sm">
                    {home.following + " following"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div class="grow h-screen overflow-scroll bg-emerald-400 p-4 ml-4">
          <Card class="h-full" href="#">
            {repo.map((item) => (
              <div class="h-full " key={item.id}>
                <Card href={item.html_url}>
                  <h1>{item.name}</h1>
                  <h1 class="text-ellipsis overflow-hidden ">
                    {item.full_name}
                  </h1>
                </Card>
              </div>
            ))}
          </Card>
        </div>
      </div>
      <FooterBar />
    </>
  );
}
