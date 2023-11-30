// 'use-client'
import React from 'react';
import { MdPerson, MdSettings, MdStore, MdExitToApp } from 'react-icons/md';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase/init';

const AuthMenu: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex items-center">
      {user ? (
        <>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MdPerson size={24} />
              <p className="ml-2">{user.displayName}</p>
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
          <div className="flex items-center ml-4" onClick={handleLogout}>
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
