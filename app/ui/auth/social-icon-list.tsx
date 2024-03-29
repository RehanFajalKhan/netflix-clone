import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialIconList() {
  return (
    <div className="flex flex-row items-center gap-4 mt-8 justify-center">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
        <FcGoogle size={32} />
      </div>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
        <FaGithub size={32} />
      </div>
    </div>
  );
}
