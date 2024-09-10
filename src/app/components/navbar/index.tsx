import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center bg-black relative p-4 h-20 w-full cursor-pointer">
      <a href="/product">
        <Image
          alt="Oonzoo company logo"
          src="/logo.png"
          layout="fill"
          objectFit="contain"
        />
      </a>
    </div>
  );
};

export default Navbar;
