// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={'/apon.png'} priority={true} width={737} height={678} alt=""  className="translate-z-0 xl:w-[500px] lg:w-[400px] md:w-[350px]" />
    </div>
  );
};

export default Avatar;
