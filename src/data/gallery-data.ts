export const galleryImages = {
  education: [
    {
      id: "edu-1",
      title: "New School Building Inauguration",
      location: "Sindhupalchok",
      imageUrl: "/student.jpg",
      category: "education",
      date: "2024-03-15",
    },
    {
      id: "edu-2",
      title: "Computer Lab Setup",
      location: "Kavre",
      imageUrl: "/children.jpg",
      category: "education",
      date: "2024-02-20",
    },
    {
      id: "edu-3",
      title: "Library Opening Ceremony",
      location: "Dolakha",
      imageUrl: "/about.png",
      category: "education",
      date: "2024-01-10",
    },
  ],
  healthcare: [
    {
      id: "health-1",
      title: "Mobile Health Camp",
      location: "Dolakha",
      imageUrl: "/camp.png",
      category: "healthcare",
      date: "2024-03-01",
    },
    {
      id: "health-2",
      title: "Eye Check-up Campaign",
      location: "Ramechhap",
      imageUrl: "/camp2.png",
      category: "healthcare",
      date: "2024-02-15",
    },
    {
      id: "health-3",
      title: "Dental Care Program",
      location: "Solukhumbu",
      imageUrl: "/help.png",
      category: "healthcare",
      date: "2024-01-25",
    },
  ],
  livelihood: [
    {
      id: "live-1",
      title: "Women's Entrepreneurship Training",
      location: "Kathmandu",
      imageUrl: "/slider1.png",
      category: "livelihood",
      date: "2024-03-10",
    },
    {
      id: "live-2",
      title: "Agricultural Skills Workshop",
      location: "Chitwan",
      imageUrl: "/story1.png",
      category: "livelihood",
      date: "2024-02-28",
    },
    {
      id: "live-3",
      title: "Handicraft Training Program",
      location: "Bhaktapur",
      imageUrl: "/story2.png",
      category: "livelihood",
      date: "2024-02-05",
    },
  ],
  "disaster-relief": [
    {
      id: "dr-1",
      title: "Flood Relief Distribution",
      location: "Bardiya",
      imageUrl: "/story3.png",
      category: "disaster-relief",
      date: "2024-03-20",
    },
    {
      id: "dr-2",
      title: "Emergency Shelter Construction",
      location: "Dhading",
      imageUrl: "/story4.png",
      category: "disaster-relief",
      date: "2024-02-10",
    },
    {
      id: "dr-3",
      title: "Medical Supply Distribution",
      location: "Gorkha",
      imageUrl: "/help.png",
      category: "disaster-relief",
      date: "2024-01-15",
    },
  ],
};

export const galleryVideos = [
  {
    id: "vid-1",
    title: "Building Dreams: School Construction Project",
    description:
      "Watch how we're transforming education infrastructure in rural Nepal",
    thumbnailUrl: "/story1.png",
    videoUrl: "https://youtube.com/watch?v=example1",
    duration: "5:23",
    category: "education",
    date: "2024-03-01",
  },
  {
    id: "vid-2",
    title: "Healthcare for All: Mobile Clinic Initiative",
    description: "Our mobile clinics bringing healthcare to remote communities",
    thumbnailUrl: "/story2.png",
    videoUrl: "https://youtube.com/watch?v=example2",
    duration: "4:15",
    category: "healthcare",
    date: "2024-02-15",
  },
  {
    id: "vid-3",
    title: "Women Empowerment Success Stories",
    description: "Meet the entrepreneurs changing their communities",
    thumbnailUrl: "/story3.png",
    videoUrl: "https://youtube.com/watch?v=example3",
    duration: "6:45",
    category: "livelihood",
    date: "2024-01-20",
  },
  {
    id: "vid-4",
    title: "Disaster Response in Action",
    description:
      "See how we respond to natural disasters and help communities recover",
    thumbnailUrl: "/story4.png",
    videoUrl: "https://youtube.com/watch?v=example4",
    duration: "7:30",
    category: "disaster-relief",
    date: "2024-03-10",
  },
];

// Type definitions for better TypeScript support
export interface GalleryImage {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
  date: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: string;
  date: string;
}
