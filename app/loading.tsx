import Image from "next/image";
import loader from "@/assets/loader.gif";

const Loading = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <Image src={loader} width={150} height={150} alt="Loading..." />
    </div>
  );
};

export default Loading;
