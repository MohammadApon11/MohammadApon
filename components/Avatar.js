// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={'/apon.png'} priority={true} width={737} height={678} alt=""  className="translate-z-0 xl:w-[600px] lg:w-[500px] md:w-[400px]" />
    </div>
  );
};

export default Avatar;
