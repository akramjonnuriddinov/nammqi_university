import { defineStore } from "pinia"
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "firebase/auth"
import { storage } from '@/firebase'
import { getDownloadURL, ref } from 'firebase/storage'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: <any>null,
    users: <any>[],
    resume: '',
    token: localStorage.getItem('token'),
  }),
  actions: {
    async signIn(payload: any) {
      const docRef = doc(db, 'users', payload.uid)
      const userSnapshot = await getDoc(docRef)
      const userInfo = userSnapshot.data()
      if (userInfo?.verified) {
        localStorage.setItem('token', payload.accessToken)
        this.token = payload.accessToken
        this.user = { email: payload.email, id: payload.uid, name: payload.displayName, photoURL: payload.photoURL, verified: payload.emailVerified }
      } else if (userInfo) {
        console.info(`Your account isn't verified please check your email (don't forget check spam)`)
      }
    },
    async fetchProfile() {
      const auth = getAuth()
      const user: any = await new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          resolve(user)
          unsubscribe()
        })
      })
      if (user?.emailVerified) {
        const docRef = doc(db, 'users', user.uid)
        const userSnapshot = await getDoc(docRef)
        const userInfo = userSnapshot.data()
        this.user = {
          ...userInfo,
          photoURL: user.photoURL
        }
      }
    },
    removeResume() {
      this.resume = ''
    },
    async logout() {
      const auth = getAuth()

      try {
        await signOut(auth)
        localStorage.removeItem('token')
        this.token = ''
        this.user = null
      } catch (error) {
        console.error('Error during logout:', error)
      }
    }
  }
})
