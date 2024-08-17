import { query, where, getDocs, collection } from 'firebase/firestore'
import { db } from '@/firebase'
import { useAuthStore } from '@/stores/auth'

export const fetchTeacherVideos = async () => {
  const authStore = useAuthStore()
  try {
    const q = query(
      collection(db, 'videos'),
      where('userId', '==', authStore.user.id)
    )

    const querySnapshot = await getDocs(q)
    const videos = [] as any

    querySnapshot.forEach((doc) => {
      videos.push(doc.data())
    })

    return videos
  } catch (error) {
    console.error('Error fetching teacher videos:', error)
  }
}
