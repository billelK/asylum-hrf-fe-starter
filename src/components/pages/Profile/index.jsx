import { useAuth0 } from '@auth0/auth0-react'
/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const {
    isLoading,
    user,
    logout
  } = useAuth0()
  
  // user.picture = undefined

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    <div className='flex-c gap-4 bg-white w-[250px] m-auto rounded-2xl'> 
      <img className="rounded-full h-[100px] w-[100px] m-auto mt-[25px]" src={user.picture} alt="" />
      <h3 className='font-bold'>{user.email}</h3>
      <p className='text-xs pb-[10px]'>{user.email}</p>
      <button onClick={logout} className='bg-[#3881f7] py-2 px-4 text-white m-auto mb-[25px] rounded-xl'>Logout</button>
    </div>
  );
};

export default Profile;
