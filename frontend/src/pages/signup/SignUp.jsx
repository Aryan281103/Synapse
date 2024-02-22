import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function SignUp() {
  return (
    <div className='felx flex-col items-center justify-center minw--96 mx-auto '>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl font-semibold text-gray-800">
          SignUp <span className='text-blue-700'>ChatApp</span>
        </h1> 
        <form>
          <div>
              <label className='label p-2'>
                <span className='text-base label-text text-gray-800'>Full Name</span>
              </label>
              <input type='text' placeholder='Enter Fullname' className='w-full input input-bordered h-10'/>
          </div> 

          <div>
              <label className='label p-2'>
                <span className='text-base label-text text-gray-800'>Username</span>
              </label>
              <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/>
          </div>

          <div>
              <label className='label '>
                <span className='text-base label-text text-gray-800'>Password</span>
              </label>
              <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'/>
          </div>

          <div>
              <label className='label '>
                <span className='text-base label-text text-gray-800'>Confirm Password</span>
              </label>
              <input type='password' placeholder='Confirm Password' className='w-full mb-2 input input-bordered h-10'/>
          </div>

          <GenderCheckbox/>


          <div>
                <button className='btn btn-block btn-sm mt-2 '>SignUp</button>
          </div>

          <a href='#'className='text-sm text-gray-800 hover:undline hover:text-red-600 mt-2 inline-block'>Already have an account?</a>







        </form> 


      </div>


    </div>
  )
}

export default SignUp


// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// function SignUp() {
//   return (
//     <div className='felx flex-col items-center justify-center minw--96 mx-auto '>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className="text-3xl font-semibold text-gray-800">
//           SignUp <span className='text-blue-700'>ChatApp</span>
//         </h1> 
//         <form>
//           <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text text-gray-800'>Full Name</span>
//               </label>
//               <input type='text' placeholder='Enter Fullname' className='w-full input input-bordered h-10'/>
//           </div> 

//           <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text text-gray-800'>Username</span>
//               </label>
//               <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//               <label className='label '>
//                 <span className='text-base label-text text-gray-800'>Password</span>
//               </label>
//               <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//               <label className='label '>
//                 <span className='text-base label-text text-gray-800'>Confirm Password</span>
//               </label>
//               <input type='password' placeholder='Confirm Password' className='w-full mb-2 input input-bordered h-10'/>
//           </div>

//           <GenderCheckbox/>


//           <div>
//                 <button className='btn btn-block btn-sm mt-2 '>SignUp</button>
//           </div>

//           <a href='#'className='text-sm text-gray-800 hover:undline hover:text-red-600 mt-2 inline-block'>Already have an account?</a>







//         </form> 


//       </div>


//     </div>
//   )
// }

// export default SignUp