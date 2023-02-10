import { LinkButton } from "@/components/Button";
import Head from "next/head";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Armen | 404</title>
        <meta name="description" content="Armen Merzaian's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <div className="top-0 w-full h-[calc(100vh-4rem)] bg-background">
        <div className="container mx-auto flex flex-col justify-start items-center">
          <h1 className="font-primary font-bold text-6xl lg:text-9xl mt-[25%] text-primary">
            404
          </h1>
          <h3 className="font-primary font-semibold text-2xl lg:text-4xl text-primary text-center px-10 lg:px-0 mt-4 lg:mt-8">
            {"Looks like the page you're looking for doesn't exist."}
          </h3>
          <LinkButton to="/" text="Go Home" variant="secondary" icon={false} shadow={false} className="mt-14 lg:mt-24"/>
        </div>
      </div>
    </>
  );
}
