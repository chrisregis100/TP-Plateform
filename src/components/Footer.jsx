

function Footer() {
  return (
   <section className="h-[200px] w-full bg-black flex flex-col justify-center text-white absolute bottom-0">
    <div className="flex justify-around items-center">
       <h1 className="text-3xl font-bold">
        FAST/UAC <span className="text-blue-700">.</span>
      </h1>
      <div className="flex flex-col gap-2 text-2xl font-semibold">
        <ul>
          <li><a href="">A Propos</a></li>
          <li> <a href="">Contact</a></li>
        </ul>
       
      
      </div>
    </div>
    <p className="text-center py-4 ">copywrite 2024© All rights reserved.</p>
    <p className="flex justify-end mx-10 italic">Design by  <span>I2Team</span> </p>
   </section>
  )
}

export default Footer