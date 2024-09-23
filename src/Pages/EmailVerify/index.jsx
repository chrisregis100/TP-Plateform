import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import fail from "../../../public/noIcon.png"
import success from "../../../public/validation.png"

function Index() {

  const [validUrl, setValidUrl] = useState(false)
  const param = useParams()

  useEffect(()=>{
    const verifyEmail = async () => {
        try {
          const url = `http://localhost:5000/api/users/${param.id}/verify/${param.token}`
          const response= await fetch(url);
          console.log(response);
         if(response.ok){
           setValidUrl(true)
         }
           
        } catch (error) {
          console.log(error);
          setValidUrl(false)
        }
    }
    verifyEmail();
  } , [param])
  return (
    <>
      {
        validUrl? (
          <div className="text-center flex flex-col justify-center items-center mx-auto text-2xl gap-4 w-full h-full mt-32 ">
            <img src={success} alt="Image succes" className="lg:w-[400px]" />
            <h1 className="">Email vérifié avec succès</h1>
            <Link to={'/connexion'} className="bg-[#09c231] rounded-xl h-10 text-center px-4 py-1">Se Connecter</Link>
          </div>

        ):
        (
          <div>
            <div className="text-center flex flex-col justify-center items-center mx-auto text-2xl gap-4 w-full h-full mt-32 ">
            <img src={fail} alt="Image succes" className="lg:w-[400px] w-[300px]" />
            <h1 className="text-[50px] font-bold">404 not found</h1>
            
          </div>
          </div>
        )
      }
    </>
  )
}

export default Index