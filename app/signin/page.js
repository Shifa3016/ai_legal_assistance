import Button from "../components/Button";
import Button2 from "../components/Button";
import Link from "next/link";
export default function SignIn(){
    return(
        <div>
      <div
        className="flex bg-white text-black justify-center w-[60%] mx-auto h-[85vh] rounded-[40px]"
      >
        <div className="right-signup w-[50%] flex flex-col items-center justify-center text-center">
          <h2 className="font-bold text-3xl">Sign In</h2>
          <div className="form-container sign-up flex flex-col justify-center px-[48px]  items-center">
            <form action="connect.php" method="post">
              <input className="my-2 bg-[#eee] py-[10px] px-[15px] border-none" type="email" placeholder="Enter Email" />
              <input className="my-2 bg-[#eee] py-[10px] px-[15px] border-none mb-[20px]" type="password" placeholder="Enter Password" />
              <div className="text-[13px] mb-[20px]">Forgot Password</div>
              <button className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
              >SIGN IN
              </button>
            </form>
          </div>
        </div>
        <div className="left-signup bg-[#f0c040] w-[50%] flex flex-col items-center justify-center text-center rounded-tl-[150px] rounded-bl-[150px] rounded-tr-[40px] rounded-br-[40px] px-[100px]">
          <h1 className="text-[40px] font-bold">Hello Friend!</h1>
          <p className="text-[16px] my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            vitae obcaecati
          </p>
          <div>
            <Link href="/signup"><button className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
            >SIGN UP
            </button></Link>
          </div>
        </div>
      </div>
    </div>
    );
}