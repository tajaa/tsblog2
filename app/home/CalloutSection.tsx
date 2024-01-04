import Image from "next/image";

const CalloutSection = () => {
  return (
    <div className="border-t-2 border-b-2 bg-slate-800 mt-12 p-8">
      <div className="grid grid-cols-12 container">
        <div className="col-span-8 flex flex-col place-self-container">
          <h2 className="semi-bold text-4xl mb-5 font-mono">
            Stay in the Know
          </h2>
          <p className="max-w-2xl">
            Stay up to do with the latest in tech news & announcemnts by reading
            our curated articles, ranging from bite-sized pieces to in-depth
            features. Perfect for busy users who want to stay informed on the go
            and for those who preer to dive deep into a topic.
          </p>
        </div>
        <div className="col-span-4 rounded-full border-2 w-[300px] h-[300px] relative self-cnter">
          <Image
            src="/logo2.png"
            alt="avatar"
            width={300}
            height={300}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CalloutSection;
