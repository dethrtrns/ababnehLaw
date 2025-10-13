"use client";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { Button, Container, useMantineTheme } from "@mantine/core";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import QuoteBlock from "../components/QuoteBlock";
import Subgrid from "../components/Subgrid";
import ScrollTop from "../components/ScrollTop";
import { use, useEffect, useState } from "react";
import DisclaimerBox from "../components/DisclaimerBox";
import { DisclaimerMantine } from "../components/DisclaimerMantine";
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });
const dummy_comment = [
  {
    userName: "Raj Shekhar Singh",
    comment:
      "this is the best legal advisor i ever got in touch with! i did not even needed to see a judge, we went through a smooth mediation process and very efficient councelling by Ratna ma'am herself.",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const Theme = useMantineTheme();
  // use sonner
  // window.alert(`
  //       The rules of the Indian Bar Council prohibit law firms from advertising
  //       and soliciting work through communication in the public domain. This
  //       website is meant solely for the purpose of information and not for the
  //       purpose of advertising. D.S Chaube & Associates does not intend to
  //       solicit clients through this website. We do not take responsibility for
  //       decisions taken by the reader based solely on the information provided
  //       in the website. By &apos;ENTERING&apos; the visitor acknowledges that
  //       the information provided in the website (a) does not amount to
  //       advertising or solicitation and (b) is meant only for his/her
  //       understanding about our activities and who we are.`);
  // useEffect(() => {
  //   console.log("isOpen changed:", isOpen);
  //   if (isOpen) {
  //     // Show the disclaimer modal
  //     <DisclaimerBox />;
  //     <Button onClick={() => setIsOpen(false)}>I understand</Button>;
  //   }
  // }, [isOpen]);

  return (
    <>
      <Head>
        <title>Ababneh Law & Arbitration(ALA)</title>
        <meta name="description" content="Ababneh Law & Arbitration(ALA)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {isOpen ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(3px)",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "fixed",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              width: "65%",
              gap: "24px",
              textAlign: "center",
              margin: "20%",
              marginTop: "10%",
              justify: "center",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #1971c2",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 2px #1971c2",
              backgroundColor: Theme.colors.gray[9],

              transition: "opacity 5s ease-in-out, visibility 5s ease-in-out",
            }}
          >
            <DisclaimerMantine title="DISCLAIMER" />{" "}
            <Button w={200} variant="light" onClick={() => setIsOpen(false)}>
              I understand & Continue
            </Button>
          </div>
        </div>
      ) : null}
      <Container
        w={"100dvw"}
        fluid
        px={0}
        sx={{ transition: "all 0.6s linear" }}
      >
        <Hero />
        <Features />
        {/* <Subgrid> */}
        {/* <QuoteBlock
              quote={dummy_comment[0].comment}
              author={dummy_comment[0].userName}
            /> */}
        {/* </Subgrid> */}
        <FAQ />
        <ContactUs />
        <ScrollTop />
        {/* <Footer /> */}
      </Container>

      {/* <h1>hello world</h1> */}
      {/* <Box
        sx={{
          justifyItems: "center",
          alignItems: "center",
        }}
      >
      </Box> */}
    </>
  );
}
