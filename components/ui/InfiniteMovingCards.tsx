"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-[100vw] overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      
      style={{
        backdropFilter: "blur(10px)"
    }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap glass-1",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
            <li className="flex quote_list flex-col w-[350px] relative m-3 rounded-lg p-4" key={idx}>
                <div>
                    <h1 className="text-[25px] text-trans_black">{item.quote}</h1>
                </div>
                <div>
                    <h2 className="text-[20px] text-trans_black font-bold">
                        <u>
                            by - {item.name}
                        </u>
                    </h2>
                </div>
                <div>
                    <h2 className="text-[20px] text-trans_black">{item.title}</h2>
                </div>
            </li>
        //   <li
        //     className="w-[350px] glass-2 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 px-8 py-6 md:w-[450px]"
        //     style={{
        //       background:
        //         "rgba(64, 78, 89, 0.1)",
        //     backdropFilter: "blur(10px)"
        //     }}
        //     key={item.name}
        //   >
        //       <div
        //         aria-hidden="true"
        //         className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5]"
        //       ></div>
        //       <span className=" relative text-[30px]">
        //         {item.quote}
        //       </span>
        //       <div className="relative z-20 mt-6 flex flex-row items-center">
        //         <span className="flex flex-col gap-1">
        //           <span className=" text-sm leading-[1.6]  font-normal">
        //             {item.name}
        //           </span>
        //           <span className=" text-sm leading-[1.6] font-normal">
        //             {item.title}
        //           </span>
        //         </span>
        //       </div>
              
        //   </li>
        ))}
        {/* h-[calc(100%_+_4px)] w-[calc(100%_+_4px) */}
       {/* <blockquote> */}
       {/* </blockquote> */}
      </ul>
    </div>
  );
};
