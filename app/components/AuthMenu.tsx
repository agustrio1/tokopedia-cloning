'use-client'
import React from 'react'
import { MdPerson, MdSettings, MdStore, MdExitToApp } from 'react-icons/md';
import { getCurrentUser } from '../lib/session';
import {signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';


interface AuthMenuProps {
  isAuthenticated: boolean;
}

const AuthMenu: React.FC<AuthMenuProps> = ({ isAuthenticated }) => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center">
      {session && session.user ? (
        <>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MdPerson size={24} />
              <p className="ml-2">{session.user.name}</p>
            </div>
            <div className="flex items-center">
              <MdSettings size={24} />
              <p className="ml-2">Settings</p>
            </div>
          </div>
          <div className="flex items-center ml-auto">
            <MdStore size={24} />
            <p className="ml-2">Buka Toko</p>
          </div>
          <div className="flex items-center ml-4">
            <MdExitToApp size={24} />
            <p className="ml-2">Keluar</p>
          </div>
        </>
      ) : (
        <>
          <Link href={'/login'} className="bg-green-600 text-white p-2  mx-auto text-center w-full rounded-md cursor-pointer">
            Masuk
          </Link>
          <Link href={'/register'} className="bg-green-600 text-white p-2 mx-auto  text-center w-full rounded-md cursor-pointer ml-2">
            Daftar
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthMenu;