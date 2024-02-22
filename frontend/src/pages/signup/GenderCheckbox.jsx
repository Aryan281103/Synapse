import React from 'react'

function GenderCheckbox() {
  return (
    <div className='flex'>
        <div className='form-control' >
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-gray-800'>Male</span>
                <input type="checkbox" name="gender" value="male" className='checkbox border-slate-900'/>
            </label>
        </div>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-gray-800'>Female</span>
                <input type="checkbox" name="gender" value="female" className='checkbox border-slate-900 '/>
            </label>
        </div>


    </div>
  )
}

export default GenderCheckbox


// import React from 'react'

// function GenderCheckbox() {
//   return (
//     <div className='flex'>
//         <div className='form-control' >
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-gray-800'>Male</span>
//                 <input type="checkbox" name="gender" value="male" className='checkbox border-slate-900'/>
//             </label>
//         </div>
//         <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-gray-800'>Female</span>
//                 <input type="checkbox" name="gender" value="female" className='checkbox border-slate-900 '/>
//             </label>
//         </div>


//     </div>
//   )
// }

// export default GenderCheckbox