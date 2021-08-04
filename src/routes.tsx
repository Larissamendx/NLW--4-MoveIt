import React, { useEffect } from 'react';

import {isAutheticated} from './auth'
import { useRouter } from 'next/router'
import { Redirect } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages';

const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login')
    }
  }, [user, loading])

  
}
