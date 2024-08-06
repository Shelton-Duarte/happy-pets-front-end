import { CaretDoubleDown } from "phosphor-react"

export const  NavBar = () => {
  return (
    <>
       <div className="bg-gray-200  w-[75%] p-4 fixed top-0 right-0 z-10">
    <div className="flex justify-end items-center font-semibold">
      <div className="flex items-center gap-4">
        <button className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
          SignUp
        </button>
        <button className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
          Login
        </button>
      </div>
    </div>
  </div>
  <div className="bg-gray-200 w-[75%] p-4 fixed top-16 right-0 z-10"> 
    <div className="flex items-center gap-2">
    
      <p className="text-black px-4 py-1 cursor-pointer flex font-semibold text-xl text-blue-700">
      See our products <CaretDoubleDown size={32} />
      </p>
    </div>
  </div>
    </>
 
  )
}

export default NavBar