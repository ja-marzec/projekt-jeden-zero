import Image from "next/image";
import { worksData } from "./works";
import { Work } from "./types";
import { AudioPlayer } from "@/component/audio-player";

const WorksItem = (props: Work) => {
  return (
    <div className="mt-8 lg:mt-16 xl:mt-24">
      <h3 className="xl:font-bold xl:text-xl">{props.title}</h3>
      {props.type === "audio" && (
        <div className="flex justify-center mt-2">
          <AudioPlayer src={props.src} />
        </div>
      )}
      <Image
        style={{
          // border: "1px solid #302f2f",
          boxShadow: "0px 0px 50px #2a2a2a",
        }}
        className="mt-4"
        src={props.imgSrc || props.src}
        alt={props.title}
        width={props.width}
        height={props.height}
        quality={100}
        priority
      />
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 xl:p-24">
      <h1 className="xl:text-3xl xl:font-bold lg:mb-6 mb-2 mt-4 lg:mt-0">
        Projekt: Zero jeden
      </h1>
      {worksData.map((item) => (
        <WorksItem {...item} key={item.title} />
      ))}
    </main>
  );
}
