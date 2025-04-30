'use client';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { isLoading, user, logout } = useAuth0();

  if (isLoading || !user) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="flex flex-col py-[120px]"> {/* Full-page layout */}
      <div className="flex items-center justify-center"> {/* Centers content */}
        <div className="flex flex-col gap-4 bg-white w-[250px] m-auto rounded-2xl shadow-lg h-auto p-4">
          <img
            className="rounded-full h-[100px] w-[100px] m-auto mt-[25px]"
            src={user.picture}
            alt=""
          />
          <h3 className="font-bold text-center">{user.email}</h3>
          <p className="text-xs pb-[10px] text-center">{user.email}</p>
          <button
            onClick={logout}
            className="bg-[#3881f7] py-2 px-4 text-white m-auto mb-[25px] rounded-xl"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
