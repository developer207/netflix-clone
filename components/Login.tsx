import Head from 'next/head'
import Image from 'next/image'
import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'

interface Inputs{
  email: string,
  password:string
}

const Login = () => {
  const {signIn , user}=useContext(AuthContext)

  const { register, handleSubmit,  formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {

    console.log(data)

    signIn(data.email, data.password)
    console.log("user",user)
  };
  

  return (
    <div className='relative h-screen w-screen md:bg-transparent bg-black'>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>
          <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline absolute"
        objectFit="cover"
      />
     
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-black/75  left-10 top-20 lg:left-[36%] lg:top-[22%] relative w-80 p-3 lg:p-14 space-y-5 lg:w-[30rem]'>
        <h1 className='font-semibold text-3xl'>Sign In</h1>
                <div className='opacity-100'>
          <input
            type="email"
            placeholder='email'
            className='w-full  bg-opacity-100 rounded p-3  bg-[#323232] outline-none focus:bg-[#454545]'
            {...register("email", { required: true })}
          />
          {errors.email && <p className='text-sm text-orange-700 font-semibold'>This field is required</p>}
                </div>
                <div>
          <input
            type="password"
            placeholder='password'
            className='w-full bg-opacity-100 rounded p-3  bg-[#323232] outline-none focus:bg-[#454545]'
            {...register("password", { required: true })}
          />
          {errors.password && <span className='text-sm text-orange-700 font-semibold'>This field is required</span>}
          
        </div>
        <button type='submit' className='w-full bg-[#e50914] p-3 rounded'>Login</button>
        <div className='flex'>
          <li className='list-none text-[grey]'>New To Netflix ? </li>  <button className='hover:underline ml-2'>Sign Up</button>
        </div>
              
                
                
            </form>
    </div>
  )
}

export default Login


// import Head from 'next/head'
// import Image from 'next/image'



// function Login() {



//   return (
//     <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
//       <Head>
//         <title>Netflix</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Image
//         src="https://rb.gy/p2hphi"
//         layout="fill"
//         className="-z-10 !hidden opacity-60 sm:!inline"
//         objectFit="cover"
//       />
//       <div className="absolute left-2 top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4">
//         <Image src="https://rb.gy/ek4j9f" layout="fill" objectFit="contain" />
//       </div>

//       <form
//         className='relative'
        
//       >
//         <h1 className="text-4xl font-semibold">Sign In</h1>
//         <div className="space-y-4">
//           <label className="inline-block w-full">
//             <input
//               type="email"
//               placeholder="Email"
//               className="input"
       
//             />
           
//           </label>
//           <label className="inline-block w-full">
//             <input
//               type="password"
            
//               placeholder="Password"
//               className="text-black"
//             />
           
//           </label>
//         </div>
//         <button
//           className="w-full rounded bg-[#E50914] py-3 font-semibold"
        
//           type="submit"
//         >
//           Sign In
//         </button>
//         <div className="text-[gray]">
//           New to Netflix?{' '}
//           <button
//             className="cursor-pointer text-white hover:underline"
           
//             type="submit"
//           >
//             Sign up now
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login

