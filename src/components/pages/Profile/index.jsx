'use client'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
 
  const {
    isLoading,
    user,
    logout
  } = useAuth0()

  console.log(user);
  
  

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    <div className='flex-c gap-4 bg-white w-[250px] m-auto rounded-2xl shadow-lg'> 
      <img className="rounded-full h-[100px] w-[100px] m-auto mt-[25px]" src={user.picture} alt="" />
      <h3 className='font-bold'>{user.email}</h3>
      <p className='text-xs pb-[10px]'>{user.email}</p>
      <button onClick={logout} className='bg-[#3881f7] py-2 px-4 text-white m-auto mb-[25px] rounded-xl'>Logout</button>
    </div>
  );
};

export default Profile;
// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to My Next.js App!</h1>
//     </div>
//   );
// }