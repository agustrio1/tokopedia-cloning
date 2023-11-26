'use-client'
import React from 'react'
import { MdPerson, MdSettings, MdStore, MdExitToApp } from 'react-icons/md';

interface AuthMenuProps {
  isAuthenticated: boolean;
}

const AuthMenu: React.FC<AuthMenuProps> = ({ isAuthenticated }) => {
  return (
    <div className="flex items-center">
        {isAuthenticated ? (
            <>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MdPerson size={24} />
                <p className="ml-2">Username</p>
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
          <button className="bg-green-600 text-white p-2 w-full rounded-md cursor-pointer">
            Masuk
          </button>
          <button className="bg-green-600 text-white p-2 w-full rounded-md cursor-pointer ml-2">
            Daftar
          </button>
        </>
        )}
    </div>
  )
}

export default AuthMenu
