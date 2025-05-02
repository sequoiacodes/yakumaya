import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Users, CheckCircle2 } from "lucide-react"
import { notFound } from "next/navigation"

// Mock project data - in a real app, this would come from a database or API
const projects = [
  {
    slug: "school-rebuilding-initiative",
    title: "School Rebuilding Initiative",
    location: "Sindhupalchok District",
    description:
      "Rebuilding earthquake-damaged schools with earthquake-resistant designs to ensure safe learning environments for children.",
    fullDescription: `
      <p>The 2015 earthquake in Nepal caused widespread destruction, with schools being among the most affected infrastructure. In Sindhupalchok district alone, over 90% of schools were damaged or destroyed, leaving thousands of children without safe places to learn.</p>
      
      <p>Our School Rebuilding Initiative aims to address this critical need by rebuilding schools using earthquake-resistant designs and sustainable materials. The project not only focuses on physical infrastructure but also on creating conducive learning environments with proper facilities.</p>
      
      <p>Each school is rebuilt with:</p>
      <ul>
        <li>Earthquake-resistant construction techniques</li>
        <li>Proper ventilation and natural lighting</li>
        <li>Separate toilet facilities for boys and girls</li>
        <li>Clean drinking water facilities</li>
        <li>Playgrounds and recreational spaces</li>
        <li>Libraries and resource centers where possible</li>
      </ul>
      
      <p>The project employs a community-based approach, involving local residents in the planning and implementation process. This not only ensures that the schools meet the specific needs of each community but also creates a sense of ownership and responsibility.</p>
      
      <p>To date, we have rebuilt 10 schools in Sindhupalchok district, benefiting over 2,000 students. Our goal is to rebuild 5 more schools in the coming year, reaching an additional 1,000 students.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200&text=School Rebuilding",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=School 1",
      "/placeholder.svg?height=400&width=600&text=School 2",
      "/placeholder.svg?height=400&width=600&text=School 3",
      "/placeholder.svg?height=400&width=600&text=School 4",
    ],
    status: "ongoing",
    progress: 75,
    target: "$120,000",
    raised: "$90,000",
    startDate: "January 2022",
    endDate: "December 2023",
    beneficiaries: "2,000+ students",
    partners: ["Nepal Education Ministry", "Build Back Better Foundation", "Local Community Groups"],
    team: [
      { name: "Rajesh Sharma", role: "Project Manager" },
      { name: "Sunita Gurung", role: "Construction Supervisor" },
      { name: "Binod Thapa", role: "Community Liaison" },
    ],
    milestones: [
      { title: "Project Planning", date: "January 2022", completed: true },
      { title: "Community Consultations", date: "February-March 2022", completed: true },
      { title: "Design Finalization", date: "April 2022", completed: true },
      { title: "Construction Phase 1 (5 schools)", date: "May-December 2022", completed: true },
      { title: "Construction Phase 2 (5 schools)", date: "January-June 2023", completed: true },
      { title: "Construction Phase 3 (5 schools)", date: "July-December 2023", completed: false },
      { title: "Project Evaluation", date: "December 2023", completed: false },
    ],
    testimonials: [
      {
        quote:
          "The new school building has given our children a safe place to learn. We no longer worry about their safety during the monsoon season.",
        name: "Dawa Sherpa",
        role: "Parent, Sindhupalchok",
      },
      {
        quote:
          "Student attendance has improved significantly since the new school was built. The better facilities have created a more conducive learning environment.",
        name: "Kamala Tamang",
        role: "Headteacher, Shree Jana Secondary School",
      },
    ],
    relatedProjects: ["womens-entrepreneurship-program", "clean-water-project"],
  },
  {
    slug: "womens-entrepreneurship-program",
    title: "Women's Entrepreneurship Program",
    location: "Kavre District",
    description:
      "Supporting women entrepreneurs with training, mentorship, and seed funding to start and grow their own businesses.",
    fullDescription: `
      <p>The Women's Entrepreneurship Program aims to empower women in Kavre district through economic independence. Many women in rural Nepal have limited access to economic opportunities, despite having valuable skills and potential.</p>
      
      <p>Our program provides comprehensive support to help women start and grow their own businesses, including:</p>
      <ul>
        <li>Business skills training covering basic accounting, marketing, and management</li>
        <li>Financial literacy workshops to improve understanding of savings, credit, and investment</li>
        <li>Technical skills training in various sectors based on market demand and participant interest</li>
        <li>Seed funding to help launch or expand businesses</li>
        <li>Ongoing mentorship from established entrepreneurs</li>
        <li>Market linkage support to connect with suppliers and customers</li>
      </ul>
      
      <p>The program targets women from marginalized communities, including single mothers, survivors of gender-based violence, and those from disadvantaged socioeconomic backgrounds.</p>
      
      <p>Since its launch, the program has supported 60 women entrepreneurs who have established businesses in various sectors, including tailoring, food processing, handicrafts, and retail. Many of these businesses have not only improved the economic situation of the women involved but have also created employment opportunities for others in their communities.</p>
      
      <p>Our goal is to expand the program to support an additional 40 women entrepreneurs in the coming year, creating a network of 100 women-led businesses that can serve as models and mentors for future participants.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200&text=Women Entrepreneurs",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Training 1",
      "/placeholder.svg?height=400&width=600&text=Business 1",
      "/placeholder.svg?height=400&width=600&text=Training 2",
      "/placeholder.svg?height=400&width=600&text=Business 2",
    ],
    status: "ongoing",
    progress: 60,
    target: "$80,000",
    raised: "$48,000",
    startDate: "March 2022",
    endDate: "February 2024",
    beneficiaries: "60 women entrepreneurs and their families",
    partners: ["Women's Empowerment Coalition", "Kavre Chamber of Commerce", "Microfinance Association of Nepal"],
    team: [
      { name: "Sunita Gurung", role: "Program Director" },
      { name: "Anita Rai", role: "Training Coordinator" },
      { name: "Prem Tamang", role: "Financial Advisor" },
    ],
    milestones: [
      { title: "Program Design", date: "March 2022", completed: true },
      { title: "Participant Selection (Phase 1)", date: "April-May 2022", completed: true },
      { title: "Training and Mentorship (Phase 1)", date: "June-August 2022", completed: true },
      { title: "Seed Funding Distribution (Phase 1)", date: "September 2022", completed: true },
      { title: "Business Launch Support (Phase 1)", date: "October-December 2022", completed: true },
      { title: "Participant Selection (Phase 2)", date: "January-February 2023", completed: true },
      { title: "Training and Mentorship (Phase 2)", date: "March-May 2023", completed: true },
      { title: "Seed Funding Distribution (Phase 2)", date: "June 2023", completed: false },
      { title: "Business Launch Support (Phase 2)", date: "July-September 2023", completed: false },
      { title: "Program Evaluation", date: "January-February 2024", completed: false },
    ],
    testimonials: [
      {
        quote:
          "The training and seed funding helped me start my tailoring business. Now I can support my family and send my children to school.",
        name: "Sita Tamang",
        role: "Program Participant, Kavre",
      },
      {
        quote:
          "The mentorship aspect of the program was invaluable. Having someone to guide me through the challenges of starting a business made all the difference.",
        name: "Maya Shrestha",
        role: "Program Participant, Kavre",
      },
    ],
    relatedProjects: ["school-rebuilding-initiative", "youth-skills-development"],
  },
]

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Find related projects
  const relatedProjects = projects.filter(p => 
    project.relatedProjects?.includes(p.slug)
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/80 px-4 py-1 rounded-full text-sm mb-4">
              {project.status === "ongoing" ? "Ongoing Project" : project.status === "completed" ? "Completed Project" : "Upcoming Project"}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{project.startDate} - {project.endDate}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>Beneficiaries: {project.beneficiaries}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="milestones">Milestones</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-0">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
                  </div>
                  
                  {project.testimonials && project.testimonials.length > 0 && (
                    <div className="mt-12">
                      <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.testimonials.map((testimonial, index) => (
                          <Card key={index} className="border-none shadow-lg">
                            <CardContent className="p-6">
                              <div className="text-3xl text-primary mb-4">"</div>
                              <p className="italic mb-4 text-gray-600 dark:text-gray-400">{testimonial.quote}</p>
                              <div className="font-bold">{testimonial.name}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.partners && project.partners.length > 0 && (
                    <div className="mt-12">
                      <h2 className="text-2xl font-bold mb-6">Partners</h2>
                      <div className="flex flex-wrap gap-4">
                        {project.partners.map((partner, index) => (
                          <div key={index} className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                            {partner}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="gallery" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery?.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="milestones" className="mt-0">
                  <div className="space-y-6">
                    {project.milestones?.map((milestone, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-green-100 dark:bg-green-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                            {milestone.completed ? (
                              <CheckCircle2 className="h-\
