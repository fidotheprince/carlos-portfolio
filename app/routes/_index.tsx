import type { MetaFunction } from "@remix-run/node";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ContactForm from "~/components/ContactForm";
import Introduction from "../components/Introduction";
import { useMediaQuery } from 'react-responsive';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const recommendation = "\"I highly recommend Carlos Cardenas for any software development project. He is a true professional and a pleasure to work with.\"";
  const isDesktop = useMediaQuery({ minWidth: 750 });
  return (
    <div>
      <Hero resources={resources} />
      <Introduction paragraph={paragraph} />
      <Projects recommendation={recommendation} />
      <ContactForm />
    </div>
  );
}

const resources = [
  {
    href: "",
    text: "This is the software developers brand logo",
    icon: (
      <img src="/logo-carlos.png" alt="Resource Icon" className="w-[163px] h-[153px]"/>
    ),
  }
];
