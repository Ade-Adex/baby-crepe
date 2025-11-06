// /data/user.ts
import { User } from "@/app/types/user"

export const mockUser: User = {
  id: 'u12345',
  username: 'techguru',
  email: 'techguru@example.com',
  fullName: 'Adeolu Amole',
  avatar: 'https://i.pravatar.cc/150?img=5',
  bio: 'Building cool stuff with Next.js ⚡ | Teacher 📚 | Gamer 🎮',
  location: 'Lagos, Nigeria',
  website: 'https://adeolu.dev',
  joinedAt: new Date('2022-05-10'),
  followers: 5230,
  following: 310,
  tweets: 1245,
  verified: true,
  status: 'active',
  wallet: 15000, // example wallet balance
  points: 275, // example reward points
}
