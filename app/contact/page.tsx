'use client'
import toast from "react-hot-toast";
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
function page() {

    useGSAP(() => {
        gsap.from(".secondftr h2", {
          y:-100,  
          delay:0,
          duration:0.8,
        //   fontSize:'190px',
          stagger:0.1,
          opacity:0,
            scrollTrigger:{
                trigger:".footer2", 
                start:"top 47%",
                end:"top 46%",
                scrub:3
            }
        });
      });

    const onSubmit = async (event:any) => {
        event.preventDefault(); 
        
        const formData = new FormData(event.target);
        formData.append("access_key", "");
      
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
          }
       
          toast.success("Successfully sent!"); 
          event.target.reset(); 
      
        } catch (error) { 
          toast.error("Could not send "); 
        }
      };

  return (
    <div className=' w-full min-h-screen mt-20 flex-col flex items-center justify-center'>

<div className= 'secondftr text-[60px] opacity-100 flex font-bold overflow-hidden max-md:text-[80px] lg:text-[120px] leading-none'>
          <h2>C</h2><h2>O</h2><h2>N</h2><h2>T</h2><h2>A</h2><h2>C</h2><h2>T</h2>
 
        </div>


        <div className=' rounded-3xl max-md:w-[96%] w-[71%] h-[80%] frame flex max-md:flex-col'>
        <form  onSubmit={onSubmit} className='w-1/2 h-full max-md:w-full p-10 max-md:p-5'>
               <div className='max-md:text-4xl text-5xl font-semibold max-lg:text-5xl  '> <h1>Lets Work  </h1> <span className=' logo2'>together !!</span></div>

             <div className=' flex flex-col gap-4 mt-20 max-md:mt-10'>
             <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>
             <input type="hidden" name="apikey" value=""/>
                <input   required   className=' bg-transparent h-12 px-4 rounded-xl border-[2.5px] border-[#ffffff32] outline-none ' type="text" name="First Name" placeholder='Name:' />
                <input    required  className=' bg-transparent h-12 px-4 rounded-xl border-[2.5px] border-[#ffffff32] outline-none ' type="email" name="email" placeholder='Email:' />
                <textarea  required className=' bg-transparent h-28 px-4 rounded-xl border-[2.5px] border-[#ffffff32] outline-none resize-none ' name="message" placeholder=' message:' />
             </div>

                <button type="submit" className=' mt-5 inshadow border-2 border-blue-500 p-3 px-10 rounded-xl'>Sumbit</button>
            </form>

            <div className=' w-1/2 max-md:w-full flex items-center flex-col '>
                <p className=' w-[70%] max-md:w-[92%] max-md:text-center max-md:text-sm text-[18px] text-gray-400 max-md:mt-14 mt-32'>  I&apos;m currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.</p>
                 <p className=' text-start text-gray-400 text-4xl  max-md:text-2xl mt-6'>Bhubanswer</p>
            </div>
        </div>
    </div>
  )
}

export default page