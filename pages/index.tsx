import Container from "./components/container";
import Layout from "./components/layout";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
          <div className="w-screen h-[90vh] bg-[#004757] flex justify-center items-center flex-wrap pb-1">
            <div className="text-white text-5xl text-center font-space">
              <p className="font-bold underline">hack the sound</p>
              <br />
              <p>december 2nd-3rd, 2023</p>
              <br />
              <p>tacoma, wa</p>
              <br />
              <Link target="_blank" href="https://forms.gle/iCPw3qu8XkxeqoHG9">
                <Button className="rounded-md bg-white px-4 py-3 text-sm font-space text-[#004757] shadow-sm hover:[#005757]">
                  register
                </Button>
              </Link>
              <span className="pr-5"/>
              <Link
                target="_blank"
                href="https://hcb.hackclub.com/donations/start/hackthesound"
              >
                <Button className="rounded-md bg-white/10 px-4 py-3 text-sm font-space text-white shadow-sm hover:[#005757]">
                  donate
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="bg-[#004757] text-white font-space pt-9 pl-9 pb-1">
              <p className="text-3xl font-bold">about</p>
              <div className="h-[100%] w-screen" />
              <p className="pt-3">
                a hackathon is a social event where developers, designers,
                engineers, and makers band together to hang out, build projects,
                and have fun! our hackathon is aimed at 12-18 year olds in the
                puget sound area, no matter their prior tech experience.
              </p>
            </div>
            <div className="h-20 w-screen bg-[#004757]" />
          </div>
          <div className="bg-[#004757] text-white pl-9 pr-9 font-space">
            <p className="text-3xl font-bold pb-10">schedule</p>
            <Accordion showDivider={false} variant="shadow">
              <AccordionItem
                key="1"
                aria-label="first day (dec. 2nd)"
                title="first day (dec. 2nd)"
                className="pb-5"
              >
                <span className="font-bold">10am:</span> check-in, welcome,
                opening ceremony
                <br />
                <span className="font-bold">11am:</span> hacking begins!
                <br />
                <span className="font-bold">1pm:</span> lunch
                <br />
                <span className="font-bold">2pm:</span> workshop (theme TBA!)
                <br />
                <span className="font-bold">5pm:</span> dinner + games
                <br />
                <span className="font-bold">6pm:</span> closing
                <br />
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="second day (dec. 3rd)"
                title="second day (dec. 3rd)"
                className="pb-5"
              >
                <span className="font-bold">10am:</span> check-in, hacking
                continues!
                <br />
                <span className="font-bold">1pm:</span> submissions due (!!!),
                lunch
                <br />
                <span className="font-bold">2pm:</span> judging
                <br />
                <span className="font-bold">3pm:</span> prizes, closing ceremony
                <br />
              </AccordionItem>
            </Accordion>
          </div>
          <div className="bg-[#004757] text-white pl-9 pr-9 font-space">
            <p className="text-3xl font-bold pb-10">faqs</p>
            <Accordion showDivider={false} variant="shadow">
              <AccordionItem
                key="1"
                aria-label="Hacking? isn’t that illegal?"
                title="Hacking? isn’t that illegal?"
                className="pb-5"
              >
                no! in our case, it{"’"}s a synonym for “creating” or “making”,
                not “breaking into computers and robbing people{"’"}s data”.
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="is this event free?"
                title="is this event free?"
                className="pb-5 pt-5"
              >
                yes! thanks to our very generous sponsors below, this event is
                free for all attendees. we{"'"}ll have plenty of snacks, swag
                and we{"'"}ll also cover dinner!
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="what should i bring?"
                title="what should i bring?"
                className="pb-5 pt-5"
              >
                a form of identification, laptop, charger(s), power brick (if
                you have it), and lunch or lunch money to use at local food
                spots. please also create{" "}
                <Link className="underline" href="https://github.com">
                  a free github account
                </Link>{" "}
                if you don’t already have one.
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="do i need a team?"
                title="do i need a team?"
                className="pb-5 pt-5"
              >
                forming a team isn{"’"}t mandatory. if you{"’"}d rather fly
                solo, that{"’"}s ok! there is a limit of four people per team.
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="can i submit past projects?"
                title="can i submit past projects?"
                className="pb-5 pt-5"
              >
                any project that you submit should have been made during the
                hackathon, not previously.
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="is there a specific language i should use?"
                title="is there a specific language i should use?"
                className="pb-5 pt-5"
              >
                nope! you can use anything from scratch to java, even figma
                prototypes if thats your jam (get it?)! whatever you{"’"}d
                prefer to work with.
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="can i use ai to create my project?"
                title="can i use ai to create my project?"
                className="pb-5 pt-5"
              >
                you can use ai to improve your code, but not create your
                project.
              </AccordionItem>
              <AccordionItem
                key="8"
                aria-label="i have another question!"
                title="i have another question!"
                className="pb-5 pt-5"
              >
                please email us at{" "}
                <Link className="underline" href="mailto:us@hackthesound.net">
                  us@hackthesound.net
                </Link>{" "}
                with any questions you have.
              </AccordionItem>
            </Accordion>
          </div>
          <div className="h-20 w-screen bg-[#004757]" />
          <div className="bg-[#004757] text-white pl-9 pr-9 font-space">
            <p className="text-3xl font-bold pb-2">sponsors</p>
            <p className="text-l text-gray-200 pb-5">
              We need your support for running a high quality event. Contact us
              at{" "}
              <Link className="underline" href="mailto:us@hackthesound.net">
                us@hackthesound.net
              </Link>{" "}
              if you are open to sponsoring us.
            </p>
          </div>
          <div className="bg-[#004757] font-space">
            <Marquee autoFill className="pr-5 pl-5 justify-left" pauseOnHover>
              <Link href="https://mypcls.org/">
                <Image
                  src="/piercecountylibrary.png"
                  alt="Pierce County Library System"
                  width={200}
                  height={200}
                />
              </Link>
              <Link href="https://www.freehumans.com">
                <Image
                  src="/freehumans.svg"
                  alt="FreeHumans"
                  width={200}
                  height={200}
                />
              </Link>
              <Link href="https://www.taskade.com">
                <Image
                  src="/taskade.png"
                  alt="Taskade"
                  width={200}
                  height={200}
                  className="pl-5 pr-5"
                />
              </Link>
              <Link href="https://www.desmos.com/">
                <Image
                  src="/desmos.png"
                  alt="Desmos"
                  width={200}
                  height={200}
                  className="pl-5 pr-5"
                />
              </Link>
              <Link href="https://www.vercel.com/">
                <Image
                  src="/vercel.svg"
                  alt="Vercel"
                  width={200}
                  height={200}
                  className="pl-5 pr-5"
                />
              </Link>
              <Link href="https://www.1password.com/">
                <Image
                  src="/1password.svg"
                  alt="1Password"
                  width={200}
                  height={200}
                  className="pl-5 pr-5"
                />
              </Link>
              <Link href="https://www.37signals.com/">
                <Image
                  src="/37signals.svg"
                  alt="37signals"
                  width={200}
                  height={200}
                  className="pl-5 pr-5"
                />
              </Link>
              <Link href="https://www.hackclub.com/">
                <Image
                  src="/hc.svg"
                  alt="Hack Club"
                  width={200}
                  height={200}
                  className="pl-5 pr-5"
                />
              </Link>
            </Marquee>
          </div>
          <div className="bg-[#004757] text-center flex justify-center items-center flex-wrap text-white font-space">
            <p className="text-2xl">Hope to see you there! :)</p>
          </div>
          <div className="h-20 w-screen bg-[#004757]" />
          <div className="bg-[#004757] text-center flex justify-center items-center flex-wrap text-white font-space pb-5">
            <p>
              Hack The Sound is fiscally sponsored by The Hack Foundation
              (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
            </p>
          </div>
          <div className="bg-[#004757] text-center flex justify-center items-center flex-wrap text-white font-space pb-10">
            <p>made with love | © 2023 hack the sound</p>
          </div>
        </Container>
      </Layout>
      <Analytics />
    </>
  );
}
