import { Container, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, reviews } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
        const firstline = reviews.slice(0,reviews.length/2)
        const secondline = reviews.slice(reviews.length/2)
    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">


                {/* section 1.o  */}
                {/* hero section  */}
                <Wrapper>
                {/* <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" /> */}
                    {/* for rendering animated comp  */}
                    {/* for animating inside in container then further get rendered in wrapper->container->children  */}
                    <Container>
                                {/* div 1  */}
                    <div id="about" className="flex flex-col items-center justify-center py-20 h-full">
                             {/* below code is for introducing makemypath badge with light revolving border */}
                             <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                Introducing MakeMyPath
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>
                        {/* above code is for introducing makemypath badge with light revolving border */}
                        
                        {/* div 1.o  */}
                        {/* now this div is inside the main div so that it appears below badge lighting and with delay class as it is under container and which is further in wrapper  */}
                        <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
                           {/* for taglines of h1 and p  */}
                            <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                                Build your dream career and get that shit done
                            </h1>
                            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                                A one stop AI platform for career roadmaps, learning resources and special certifications 
                            </p>

                            {/* below code is for the badge witj get started button and a tagline */}

                            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                                <Link href="#" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                                        ✨ Start building your dream career now!
                                    </p>
                                    <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                                        Get Started
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                            {/* above code is for badge with starte button and a tagline  */}
                    </div>

                    {/* div 2.o for image and revolving border and gradient  */}
                    <div className="relative flex items-center py-10 md:py-20 w-full">
                         <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                                <Image
                                    src="/assets/dashboard.svg"
                                    alt="banner image"
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                    className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                                />

                                <BorderBeam size={250} duration={10} delay={9} />
                            </div>
                    </div>

                </div>

                    
                    </Container>
                </Wrapper>
        

                {/* section 2.o  */}
                {/* process  */}
                <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                    <Container>

                        <div className="max-w-md mx-auto text-start md:text-center">
                                <SectionBadge title="The Process" />
                                <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                                     Three steps to build your dream career
                                </h2>
                                <p className="text-muted-foreground mt-6">
                                     Turn your vision into reality in just 3 simple steps
                                </p>
                        </div>

                    </Container>
                    {/* container 2.o in section 2.o wrapper -> container -> div -< -< container  */}
                    <Container>
                        <div className="flex flex-col tems-center justify-center py-10 md:py-20 w-full">
                                {/* for mapping  */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                                    {perks.map((item)=>(
                                        <div key={item.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                            <div className="flex items-center justify-center">
                                                <item.icon className="w-8 h-8"/>
                                            </div>
                                            <h3 className="text-lg font-medium mt-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                                {item.info}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </Container>
                </Wrapper>


                {/* section 3.o  */}
                {/* features  */}
                <Wrapper>
                    <Container>

                            <div id="features" className="max-w-md mx-auto text-start md:text-center">
                                <SectionBadge title="Features" />
                                <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                                    Discover our powerful features
                                </h2>
                                <p className="text-muted-foreground mt-6">
                                    MakeMyPath offers a range of features to help you build a strong career 
                                </p>
                            </div>

                    </Container>
                       {/* container 2.o for mapping of features as 1.o was for badge and h2, p  */}
                    <Container>
                        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                            {/* for mapping  */}    
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 ">
                                {features.map((item)=>(
                                    <div key={item.title} className="flex  flex-col items-start lg:items-start px-0 md:px-4">
                                        
                                        <h3 className="text-lg font-medium mt-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                            {item.info}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Wrapper>


                {/* section 4.o  */}
                {/* testimonials  */}
                <Wrapper>
                    <Container>
                        
                        <div id="reviews" className="max-w-md mx-auto  text-start md:text-center mt-5">
                            <SectionBadge title="Testimonials" />
                                <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                                  What people are saying
                                </h2>
                                <p className="text-muted-foreground mt-6">
                                 See how MakeMyPath empowers lives of students and working professionals
                                </p>
                        </div>
                    
                    </Container>
                    {/* container 2.o in section 4.o  */}
                    <Container>
                        <div className="py-10 md:py-20 w-full">
                            {/* for mapping  */}
                            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10 gap-y-3">
                                {/* 1st line ki mapping ka marque  */}
                                <Marquee  pauseOnHover className="[--duration:20s] select-none">
                                    {firstline.map((item)=>(
                                        <figure key={item.name}  className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}>
                                            <div className="flex flex-row items-center gap-2">
                                                <UserIcon className="w-6 h-6"/>
                                                <div className="flex flex-col">
                                                    <figcaption className="text-sm font font-medium">
                                                        {item.name}
                                                    </figcaption>
                                                    <p className="text-xs font-medium text-muted-foreground">{item.username}</p>
                                                </div>
                                            </div>
                                            <blockquote className="mt-2 text-sm">{item.body}</blockquote>
                                        </figure>
                                    ))}
                                </Marquee>
                                    {/* 2nd line of reviews  ke lie alag marque taki ek alag marque dikhe it means 2 dikhe ulte or sidhe jate -> <- */}
                                <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                    {secondline.map((item)=>(
                                        <figure key={item.name}  className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}>
                                            <div className="flex flex-row items-center gap-2">
                                                <UserIcon className="w-6 h-6"/>
                                                <div className="flex flex-col">
                                                    <figcaption className="text-sm font font-medium">
                                                        {item.name}
                                                    </figcaption>
                                                    <p className="text-xs font-medium text-muted-foreground">{item.username}</p>
                                                </div>
                                            </div>
                                            <blockquote className="mt-2 text-sm">{item.body}</blockquote>
                                        </figure>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Container>
                </Wrapper>


                {/* section 5.o  */}
                {/* aise hi get started  */}
                <Wrapper className="flex flex-col items-center justify-center py-12 relative ">
                    <Container>
                         <LampContainer>
                            <div className="flex flex-col items-center justify-center relative w-full text-center">
                                <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                    From learning to implementation faster than ever
                                </h2>
                                <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                    Build your dream career with our AI tailored resources, certifications, roadmaps, and job roles
                                </p>
                                <Button variant="white" className="mt-6" asChild>
                                    <Link href={'/sign-in'}>
                                        Get started for free 
                                        <ArrowRight className="w-4 h-4 ml-2"/>
                                    </Link>
                                </Button>
                            </div>
                        </LampContainer>           
                    </Container>
                </Wrapper>

        </section>
    )
};

export default HomePage;
