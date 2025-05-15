import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react"
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
  {
    slug: "clean-water-project",
    title: "Clean Water Project",
    location: "Dolakha District",
    description: "Providing access to clean drinking water through sustainable water systems in rural communities.",
    fullDescription: `
      <p>Access to clean drinking water remains a significant challenge in many rural areas of Nepal. In Dolakha district, many communities rely on contaminated water sources, leading to waterborne diseases and other health issues.</p>
      
      <p>Our Clean Water Project aims to address this critical need by installing sustainable water systems that provide clean, safe drinking water to rural communities. The project takes a holistic approach, focusing not only on infrastructure but also on education and community management.</p>
      
      <p>Each water system includes:</p>
      <ul>
        <li>Source protection measures to prevent contamination</li>
        <li>Water treatment facilities appropriate for local conditions</li>
        <li>Distribution networks to ensure equitable access</li>
        <li>Community tap stands strategically located for convenience</li>
        <li>Water quality monitoring equipment and training</li>
      </ul>
      
      <p>The project employs a community-based approach, with local water user committees taking responsibility for the operation and maintenance of the systems. This ensures sustainability and builds local capacity.</p>
      
      <p>To date, we have installed 15 water systems in Dolakha district, benefiting over 5,000 people. Our goal is to install 10 more systems in the coming year, reaching an additional 3,000 people.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200&text=Clean Water Project",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Water System 1",
      "/placeholder.svg?height=400&width=600&text=Community Tap",
      "/placeholder.svg?height=400&width=600&text=Water Committee",
      "/placeholder.svg?height=400&width=600&text=Water Testing",
    ],
    status: "ongoing",
    progress: 65,
    target: "$100,000",
    raised: "$65,000",
    startDate: "February 2022",
    endDate: "January 2024",
    beneficiaries: "5,000+ community members",
    partners: ["Nepal Water Supply Corporation", "Rural Water Management Committee", "Global Water Initiative"],
    team: [
      { name: "Hari Bahadur", role: "Project Manager" },
      { name: "Laxmi Tamang", role: "Community Mobilizer" },
      { name: "Deepak Shrestha", role: "Water Engineer" },
    ],
    milestones: [
      { title: "Project Planning", date: "February 2022", completed: true },
      { title: "Community Assessments", date: "March-April 2022", completed: true },
      { title: "System Design", date: "May 2022", completed: true },
      { title: "Phase 1 Implementation (7 systems)", date: "June-December 2022", completed: true },
      { title: "Phase 2 Implementation (8 systems)", date: "January-August 2023", completed: true },
      { title: "Phase 3 Implementation (10 systems)", date: "September 2023-January 2024", completed: false },
      { title: "Project Evaluation", date: "January 2024", completed: false },
    ],
    testimonials: [
      {
        quote:
          "Before this project, I had to walk two hours each day to collect water. Now, clean water is available just a few minutes from my home.",
        name: "Gita Magar",
        role: "Community Member, Dolakha",
      },
      {
        quote:
          "Cases of waterborne diseases in our village have decreased significantly since the installation of the clean water system.",
        name: "Dr. Ram Karki",
        role: "Local Health Post Officer",
      },
    ],
    relatedProjects: ["school-rebuilding-initiative", "health-camp-initiative"],
  },
  {
    slug: "youth-skills-development",
    title: "Youth Skills Development Program",
    location: "Kathmandu Valley",
    description:
      "Equipping young people with vocational and life skills to improve their employability and entrepreneurship.",
    fullDescription: `
      <p>Youth unemployment is a significant challenge in Nepal, with many young people lacking the skills needed for the job market. Our Youth Skills Development Program aims to bridge this gap by providing comprehensive training in both vocational and life skills.</p>
      
      <p>The program offers training in various in-demand sectors, including:</p>
      <ul>
        <li>Information technology and digital skills</li>
        <li>Hospitality and tourism</li>
        <li>Construction and carpentry</li>
        <li>Electrical and plumbing</li>
        <li>Tailoring and fashion design</li>
      </ul>
      
      <p>In addition to technical skills, the program also focuses on essential life skills such as communication, teamwork, problem-solving, and financial literacy. This holistic approach ensures that participants are well-prepared for the workforce or for starting their own businesses.</p>
      
      <p>The program targets young people from disadvantaged backgrounds, including those who have dropped out of school, come from low-income families, or face other barriers to employment. Special attention is given to ensuring gender balance and inclusion of marginalized groups.</p>
      
      <p>Since its launch, the program has trained 200 young people, with over 80% of graduates finding employment or starting their own businesses within six months of completing the program. Our goal is to train an additional 150 young people in the coming year.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200&text=Youth Skills Development",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=IT Training",
      "/placeholder.svg?height=400&width=600&text=Carpentry Workshop",
      "/placeholder.svg?height=400&width=600&text=Life Skills Session",
      "/placeholder.svg?height=400&width=600&text=Graduation Ceremony",
    ],
    status: "ongoing",
    progress: 70,
    target: "$150,000",
    raised: "$105,000",
    startDate: "April 2022",
    endDate: "March 2024",
    beneficiaries: "200 young people trained to date",
    partners: ["Nepal Vocational Training Authority", "Youth Employment Initiative", "Private Sector Alliance"],
    team: [
      { name: "Bikash Rai", role: "Program Director" },
      { name: "Sarita Maharjan", role: "Training Coordinator" },
      { name: "Nabin Tamang", role: "Job Placement Officer" },
    ],
    milestones: [
      { title: "Program Design", date: "April 2022", completed: true },
      { title: "Curriculum Development", date: "May-June 2022", completed: true },
      { title: "Batch 1 Training (50 participants)", date: "July-September 2022", completed: true },
      { title: "Batch 2 Training (50 participants)", date: "October-December 2022", completed: true },
      { title: "Batch 3 Training (50 participants)", date: "January-March 2023", completed: true },
      { title: "Batch 4 Training (50 participants)", date: "April-June 2023", completed: true },
      { title: "Batch 5 Training (75 participants)", date: "July-October 2023", completed: false },
      { title: "Batch 6 Training (75 participants)", date: "November 2023-February 2024", completed: false },
      { title: "Program Evaluation", date: "March 2024", completed: false },
    ],
    testimonials: [
      {
        quote:
          "The IT skills I learned in this program helped me secure a job at a local tech company. I now earn enough to support my family and continue my education.",
        name: "Rajan Tamang",
        role: "Program Graduate",
      },
      {
        quote:
          "The combination of technical and life skills training is what makes this program special. Our company has hired several graduates and found them to be well-prepared for the workplace.",
        name: "Anita Shrestha",
        role: "HR Manager, Kathmandu Tech Solutions",
      },
    ],
    relatedProjects: ["womens-entrepreneurship-program", "school-rebuilding-initiative"],
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
  const relatedProjects = projects.filter((p) => project.relatedProjects?.includes(p.slug)).slice(0, 2) // Limit to 2 related projects

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
              {project.status === "ongoing"
                ? "Ongoing Project"
                : project.status === "completed"
                  ? "Completed Project"
                  : "Upcoming Project"}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  {project.startDate} - {project.endDate}
                </span>
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
                              <div className="text-3xl text-primary mb-4"></div>
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
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
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
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${milestone.completed ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300" : "bg-gray-100 text-gray-400 dark:bg-gray-800"}`}
                          >
                            {milestone.completed ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <h3
                              className={`font-medium ${milestone.completed ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"}`}
                            >
                              {milestone.title}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{milestone.date}</span>
                          </div>
                          {index < project.milestones.length - 1 && (
                            <div className="ml-4 mt-1 mb-1 h-10 w-px bg-gray-300 dark:bg-gray-700"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="team" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.team?.map((member, index) => (
                      <Card key={index} className="overflow-hidden border-none shadow-lg">
                        <CardContent className="p-6">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-primary text-xl font-bold">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Social Sharing */}
              <div className="mt-12 flex items-center space-x-4">
                <span className="text-sm font-medium">Share this project:</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Copy link</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Donation Progress */}
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Funding</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Raised: {project.raised}</span>
                      <span>Target: {project.target}</span>
                    </div>
                    <Progress value={project.progress} className="h-2 bg-gray-100 dark:bg-gray-800" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {project.progress}% of our goal reached
                    </div>
                    <Link href="/donate" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90">Donate Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Status:</span>
                      <span className="font-medium capitalize">{project.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Location:</span>
                      <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Start Date:</span>
                      <span className="font-medium">{project.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">End Date:</span>
                      <span className="font-medium">{project.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Beneficiaries:</span>
                      <span className="font-medium">{project.beneficiaries}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Get Involved */}
              <Card className="border-none shadow-lg bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Get Involved</h3>
                  <p className="mb-4">
                    There are many ways you can support this project beyond donations. Join us as a volunteer, spread
                    the word, or become a partner.
                  </p>
                  <Link href="/get-involved" className="block">
                    <Button variant="secondary" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Card key={relatedProject.slug} className="overflow-hidden border-none shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{relatedProject.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{relatedProject.description}</p>
                      <Link href={`/projects/${relatedProject.slug}`}>
                        <Button variant="outline" className="group">
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-primary/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Help Us Make a Difference</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Your support can help us continue our work and expand our impact. Join us in making a difference in the
              lives of those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate">
                <Button className="bg-primary hover:bg-primary/90 min-w-[150px]">Donate Now</Button>
              </Link>
              <Link href="/get-involved">
                <Button variant="outline" className="min-w-[150px]">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
