"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Calendar, MapPin, Users, Target } from "lucide-react";

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`relative h-[40vh] flex items-center ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Projects Hero"
            fill
            className={`object-cover brightness-50 ${
              theme === "dark" ? "opacity-80" : "opacity-100"
            }`}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Projects
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-100" : "text-gray-600"
              }`}
            >
              Explore our ongoing and completed projects that are creating
              sustainable impact across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Making a Difference</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our projects focus on creating sustainable solutions to the most
              pressing challenges faced by communities across Nepal.
            </p>
          </div>

          <Tabs defaultValue="ongoing" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="ongoing">Ongoing Projects</TabsTrigger>
                <TabsTrigger value="completed">Completed Projects</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Projects</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ongoing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "School Rebuilding Initiative",
                    location: "Sindhupalchok District",
                    description:
                      "Rebuilding earthquake-damaged schools with earthquake-resistant designs to ensure safe learning environments for children.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=School Rebuilding",
                    progress: 75,
                    target: "$120,000",
                    raised: "$90,000",
                    slug: "school-rebuilding-initiative",
                  },
                  {
                    title: "Women's Entrepreneurship Program",
                    location: "Kavre District",
                    description:
                      "Supporting women entrepreneurs with training, mentorship, and seed funding to start and grow their own businesses.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Women Entrepreneurs",
                    progress: 60,
                    target: "$80,000",
                    raised: "$48,000",
                    slug: "womens-entrepreneurship-program",
                  },
                  {
                    title: "Clean Water Project",
                    location: "Bajura District",
                    description:
                      "Installing clean water systems in remote villages to provide safe drinking water and reduce waterborne diseases.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Clean Water",
                    progress: 40,
                    target: "$60,000",
                    raised: "$24,000",
                    slug: "clean-water-project",
                  },
                  {
                    title: "Mobile Health Clinics",
                    location: "Dolakha District",
                    description:
                      "Operating mobile health clinics that bring essential healthcare services to remote communities with limited access to medical facilities.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Mobile Clinic",
                    progress: 85,
                    target: "$45,000",
                    raised: "$38,250",
                    slug: "mobile-health-clinics",
                  },
                  {
                    title: "Sustainable Agriculture Initiative",
                    location: "Chitwan District",
                    description:
                      "Training farmers in sustainable agricultural practices to improve crop yields and resilience to climate change.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Agriculture",
                    progress: 50,
                    target: "$70,000",
                    raised: "$35,000",
                    slug: "sustainable-agriculture-initiative",
                  },
                  {
                    title: "Youth Skills Development",
                    location: "Kathmandu Valley",
                    description:
                      "Providing vocational training and employment support for underprivileged youth to help them secure sustainable livelihoods.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Youth Skills",
                    progress: 65,
                    target: "$55,000",
                    raised: "$35,750",
                    slug: "youth-skills-development",
                  },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                        <div className="flex justify-between mt-1 text-sm text-gray-600 dark:text-gray-400">
                          <span>Raised: {project.raised}</span>
                          <span>Goal: {project.target}</span>
                        </div>
                      </div>

                      <Button asChild className="w-full">
                        <Link href={`/projects/${project.slug}`}>
                          View Project
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Earthquake Recovery Housing",
                    location: "Gorkha District",
                    description:
                      "Built 50 earthquake-resistant homes for families affected by the 2015 earthquake, providing safe and durable housing.",
                    image: "/placeholder.svg?height=400&width=600&text=Housing",
                    completedDate: "December 2021",
                    beneficiaries: "50 families",
                    slug: "earthquake-recovery-housing",
                  },
                  {
                    title: "Community Learning Center",
                    location: "Lalitpur District",
                    description:
                      "Established a community learning center with a library, computer lab, and training facilities for children and adults.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Learning Center",
                    completedDate: "March 2022",
                    beneficiaries: "500+ community members",
                    slug: "community-learning-center",
                  },
                  {
                    title: "Solar Power Installation",
                    location: "Humla District",
                    description:
                      "Installed solar power systems in 10 remote villages, providing electricity for homes, schools, and health posts.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Solar Power",
                    completedDate: "August 2022",
                    beneficiaries: "1,200+ individuals",
                    slug: "solar-power-installation",
                  },
                  {
                    title: "Maternal Health Initiative",
                    location: "Jumla District",
                    description:
                      "Trained midwives and equipped health posts to improve maternal and child health services in remote areas.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Maternal Health",
                    completedDate: "November 2022",
                    beneficiaries: "800+ mothers and children",
                    slug: "maternal-health-initiative",
                  },
                  {
                    title: "School Nutrition Program",
                    location: "Dhading District",
                    description:
                      "Implemented a school meal program in 15 schools to improve nutrition and boost attendance and learning outcomes.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=School Meals",
                    completedDate: "February 2023",
                    beneficiaries: "1,500+ students",
                    slug: "school-nutrition-program",
                  },
                  {
                    title: "Vocational Training Center",
                    location: "Kathmandu",
                    description:
                      "Established a vocational training center offering courses in tailoring, computer skills, beauty and wellness, and hospitality.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Vocational Training",
                    completedDate: "April 2023",
                    beneficiaries: "200+ trainees annually",
                    slug: "vocational-training-center",
                  },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-medium">
                        Completed
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center mb-2">
                        <Calendar className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Completed: {project.completedDate}
                        </span>
                      </div>

                      <div className="flex items-center mb-4">
                        <Users className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Beneficiaries: {project.beneficiaries}
                        </span>
                      </div>

                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/projects/${project.slug}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Community Health Center",
                    location: "Rasuwa District",
                    description:
                      "Building a community health center to provide primary healthcare services, maternal care, and health education.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Health Center",
                    startDate: "September 2023",
                    target: "$150,000",
                    slug: "community-health-center",
                  },
                  {
                    title: "Digital Literacy Program",
                    location: "Multiple Districts",
                    description:
                      "Launching a digital literacy program to equip rural communities with essential computer and internet skills.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Digital Literacy",
                    startDate: "October 2023",
                    target: "$85,000",
                    slug: "digital-literacy-program",
                  },
                  {
                    title: "Eco-friendly Irrigation System",
                    location: "Mustang District",
                    description:
                      "Implementing eco-friendly irrigation systems to help farmers conserve water and improve crop yields in arid regions.",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Irrigation",
                    startDate: "November 2023",
                    target: "$110,000",
                    slug: "eco-friendly-irrigation-system",
                  },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-medium">
                        Upcoming
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center mb-2">
                        <Calendar className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Starting: {project.startDate}
                        </span>
                      </div>

                      <div className="flex items-center mb-4">
                        <Target className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Fundraising Goal: {project.target}
                        </span>
                      </div>

                      <Button asChild className="w-full">
                        <Link href={`/projects/${project.slug}`}>
                          Support This Project
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Project */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Featured Project"
                alt="Featured Project"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
                Featured Project
              </div>
              <h2 className="text-3xl font-bold mb-4">
                School Rebuilding Initiative
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                After the devastating earthquake in Nepal, we&apos;ve been
                working to rebuild schools in remote areas, ensuring children
                have safe spaces to learn and grow.
              </p>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Fundraising Progress</span>
                  <span className="font-medium">$90,000 / $120,000</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>10 schools rebuilt in Sindhupalchok district</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Over 2,000 students now have access to safe classrooms
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Earthquake-resistant construction techniques used</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/projects/school-rebuilding-initiative">
                    Learn More
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/donate">Support This Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Through our projects, we&apos;ve made significant strides in
              improving lives across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-gray-600 dark:text-gray-400">
                Districts Reached
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                15,000+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                People Directly Benefited
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$1.2M</div>
              <div className="text-gray-600 dark:text-gray-400">
                Funds Invested
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Project Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We follow a systematic approach to ensure our projects create
              sustainable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Community Assessment",
                description:
                  "We work directly with communities to understand their needs and priorities.",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Project Design",
                description:
                  "We design projects in collaboration with community members and relevant stakeholders.",
                icon: "📝",
              },
              {
                step: "3",
                title: "Implementation",
                description:
                  "We implement projects with community participation and regular monitoring.",
                icon: "🛠️",
              },
              {
                step: "4",
                title: "Evaluation & Sustainability",
                description:
                  "We evaluate impact and ensure mechanisms for long-term sustainability.",
                icon: "📊",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className={`border-none shadow-lg ${
                  theme === "dark" ? "bg-gray-900" : "bg-white"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="text-lg font-bold mb-2">
                    Step {step.step}: {step.title}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Projects</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your contribution can help us implement more projects and reach more
            communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/20"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
