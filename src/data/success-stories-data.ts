export type SuccessStory = {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string[]
    category: string
    location: string
    date: string
    image: string
    featured?: boolean
    testimonial?: string
    impact?: {
      title: string
      value: string
    }[]
    relatedStories?: string[]
  }
  
  export const successStories: SuccessStory[] = [
    {
      id: 1,
      title: "Sunita's Journey to Financial Independence",
      slug: "sunita-financial-independence",
      excerpt:
        "After participating in our vocational training program, Sunita started her own tailoring business and now supports her family.",
      content: [
        "Sunita Tamang, a 35-year-old mother of two from Kathmandu, had always dreamed of financial independence. After her husband's injury left him unable to work, the family struggled to make ends meet.",
        "In 2022, Sunita joined our vocational training program, where she received six months of intensive training in tailoring and business management. The program not only taught her technical skills but also provided her with knowledge about marketing, pricing, and customer service.",
        "Upon completion of the program, Sunita received a sewing machine and a small grant to start her business. She set up a small tailoring shop in her neighborhood, offering clothing repairs and custom-made garments.",
        "Within six months, her business had grown enough that she could hire another woman from her community. Today, Sunita's tailoring business employs three women and serves customers from across Kathmandu.",
        '"Before joining the program, I was struggling to feed my children. Now, I can not only provide for my family but also send my children to a good school. The training changed my life," says Sunita.',
        "The success of Sunita's business has inspired other women in her community to seek skills training. She now mentors new trainees from our program, sharing her experience and knowledge with them.",
        "Sunita's story is a testament to the transformative power of skills training and economic empowerment. With the right support and opportunities, individuals like Sunita can break the cycle of poverty and create a better future for themselves and their families.",
      ],
      category: "Livelihood",
      location: "Kathmandu",
      date: "May 2023",
      image: "/placeholder.svg?height=600&width=1200&text=Sunita's Journey",
      featured: true,
      testimonial:
        "Before joining the vocational training program, I was struggling to make ends meet. Now, with my own tailoring business, I can support my family and send my children to school.",
      impact: [
        {
          title: "Jobs Created",
          value: "3",
        },
        {
          title: "Family Income Increased",
          value: "300%",
        },
        {
          title: "Children in School",
          value: "2",
        },
      ],
      relatedStories: ["womens-cooperative", "mayas-organic-farm"],
    },
    {
      id: 2,
      title: "Rebuilding Gorkha School After the Earthquake",
      slug: "gorkha-school-rebuilding",
      excerpt:
        "How our school rebuilding project provided a safe learning environment for 300 students in earthquake-affected Gorkha district.",
      content: [
        "The 2015 earthquake in Nepal devastated many communities, including the village of Barpak in Gorkha district, which was near the epicenter. The local school, which served over 300 students, was completely destroyed, leaving children without a place to learn.",
        "In partnership with local authorities and international donors, Akumaya Foundation initiated a school rebuilding project in 2016. The goal was not just to rebuild the physical structure but to create a safer, more resilient learning environment.",
        "The new school was designed to be earthquake-resistant, with proper foundations and reinforced structures. It includes eight classrooms, a library, a computer lab, and proper sanitation facilities for boys and girls.",
        "Beyond the physical infrastructure, the project also focused on training teachers in disaster preparedness and psychological support for children who had experienced trauma during the earthquake.",
        "The school was completed in 2018 and now serves as a model for earthquake-resistant school construction in the region. It has become a community hub, hosting various educational and cultural activities.",
        '"After the earthquake, we thought our children\'s education would be severely disrupted. But thanks to the new school, they are learning in a better environment than before," says Ram Bahadur, a parent and community leader.',
        "The success of this project demonstrates the importance of building back better after disasters. By incorporating disaster risk reduction measures into reconstruction efforts, communities can become more resilient to future hazards.",
      ],
      category: "Education",
      location: "Gorkha District",
      date: "April 2023",
      image: "/placeholder.svg?height=600&width=1200&text=Gorkha School",
      impact: [
        {
          title: "Students Benefited",
          value: "300+",
        },
        {
          title: "Classrooms Built",
          value: "8",
        },
        {
          title: "Teachers Trained",
          value: "12",
        },
      ],
      relatedStories: ["raju-education-journey", "digital-learning-rural-school"],
    },
    {
      id: 3,
      title: "Dolakha Health Camp: Bringing Healthcare to Remote Areas",
      slug: "dolakha-health-camp",
      excerpt:
        "Our health camp in Dolakha provided medical services to over 500 people who otherwise wouldn't have access to healthcare.",
      content: [
        "Access to healthcare remains a significant challenge in many remote areas of Nepal. In Dolakha district, many communities are located several hours' walk from the nearest health facility, making it difficult for residents to receive timely medical care.",
        "To address this gap, Akumaya Foundation organized a comprehensive health camp in Dolakha in March 2023. The camp brought together a team of 15 healthcare professionals, including general physicians, gynecologists, pediatricians, dentists, and eye specialists.",
        "Over three days, the health camp provided free medical consultations, basic treatments, and medicines to more than 500 people from surrounding villages. Many patients received diagnoses and treatments for conditions that had been left untreated for years.",
        "The camp also conducted health education sessions on topics such as hygiene, nutrition, maternal health, and disease prevention. These sessions were designed to empower communities with knowledge to prevent common health issues.",
        "For patients requiring more specialized care, the health camp team arranged referrals and transportation to district hospitals. The foundation covered the costs for those who couldn't afford the treatment.",
        '"I had been suffering from severe eye problems for two years, but couldn\'t travel to the city for treatment. At the health camp, I was diagnosed with cataracts and scheduled for surgery. Now I can see clearly again," shares Maya Tamang, a 65-year-old resident.',
        "The success of the Dolakha health camp has led to plans for regular mobile health clinics in the region. By bringing healthcare services directly to remote communities, we can ensure that geography is not a barrier to good health.",
      ],
      category: "Healthcare",
      location: "Dolakha District",
      date: "March 2023",
      image: "/placeholder.svg?height=600&width=1200&text=Health Camp",
      impact: [
        {
          title: "Patients Treated",
          value: "500+",
        },
        {
          title: "Medical Professionals",
          value: "15",
        },
        {
          title: "Villages Reached",
          value: "12",
        },
      ],
      relatedStories: ["clean-water-bajura", "mobile-health-clinic"],
    },
    {
      id: 4,
      title: "Ram's New Home: Recovery After the Floods",
      slug: "rams-new-home",
      excerpt:
        "After losing everything in the floods, Ram and his family received support to rebuild their home and restore their livelihood.",
      content: [
        "In July 2022, unusually heavy monsoon rains caused severe flooding in Nepal's Terai region, including Saptari district. Ram Yadav, a farmer with a small plot of land, lost his home, crops, and livestock in the disaster.",
        "Ram and his family of five were forced to live in a temporary shelter for several weeks, uncertain about their future. With their source of livelihood destroyed, they faced the prospect of long-term displacement and poverty.",
        "Through our disaster recovery program, Akumaya Foundation identified Ram's family as highly vulnerable and in need of comprehensive support. The foundation provided immediate relief in the form of food, clean water, and essential supplies.",
        "Beyond emergency relief, the foundation worked with Ram to develop a recovery plan. This included support for rebuilding a flood-resistant home on slightly elevated ground and restoring his agricultural livelihood.",
        "The new home was constructed using locally available materials but incorporated flood-resistant design elements. Ram also received seeds, tools, and training on climate-resilient farming techniques to help him adapt to changing weather patterns.",
        '"The floods took everything from us, but the support we received helped us not just recover but build a better life. Our new home is stronger, and I now know how to protect my crops from future floods," says Ram.',
        "Today, Ram's family is back on their feet. Their new home has withstood subsequent heavy rains, and their farm is producing a variety of crops. Ram has even started a small vegetable garden that provides additional income for the family.",
        "Ram's story highlights the importance of comprehensive disaster recovery that addresses both immediate needs and long-term resilience. By helping families rebuild their homes and livelihoods in ways that reduce future risks, we can break the cycle of disaster and poverty.",
      ],
      category: "Disaster Relief",
      location: "Saptari District",
      date: "February 2023",
      image: "/placeholder.svg?height=600&width=1200&text=Ram's Home",
      impact: [
        {
          title: "Family Members Helped",
          value: "5",
        },
        {
          title: "Flood-Resistant Home Built",
          value: "1",
        },
        {
          title: "Agricultural Land Restored",
          value: "2 acres",
        },
      ],
      relatedStories: ["solar-power-humla", "winter-relief-program"],
    },
    {
      id: 5,
      title: "Women's Cooperative Transforms Village Economy",
      slug: "womens-cooperative",
      excerpt:
        "How a women's savings cooperative in Kavre is creating economic opportunities and transforming the local economy.",
      content: [
        "In the rural village of Panchkhal in Kavre district, women traditionally had limited access to financial services and economic opportunities. Most families relied on subsistence farming, with men often migrating to cities or abroad for work.",
        "In 2021, Akumaya Foundation initiated a women's economic empowerment program in the village. The program began with financial literacy training for 25 women, covering topics such as saving, budgeting, and basic business skills.",
        "Following the training, the women formed a savings cooperative, with each member contributing a small amount weekly. The cooperative provided a safe place for women to save money and access small loans for income-generating activities.",
        "With technical support from the foundation, the cooperative developed clear governance structures and transparent financial management systems. This built trust among members and attracted more women to join.",
        "Today, the cooperative has grown to 120 members and has a capital base of over NPR 1.5 million. Members have used loans from the cooperative to start various small businesses, including vegetable farming, poultry raising, and handicraft production.",
        '"Before joining the cooperative, I had never saved money or made financial decisions. Now, I run a successful vegetable business and have even hired two people from my village," says Sarita Tamang, the current chairperson of the cooperative.',
        "The economic impact of the cooperative extends beyond its members. As women's businesses have grown, they have created jobs for others in the community. The increased economic activity has also led to improved services in the village, including better transportation and market facilities.",
        "The success of the Panchkhal women's cooperative demonstrates how community-based financial institutions can drive economic development in rural areas. By providing women with access to financial services and business support, we can unlock their potential as economic actors and community leaders.",
      ],
      category: "Livelihood",
      location: "Kavre District",
      date: "January 2023",
      image: "/placeholder.svg?height=600&width=1200&text=Women's Cooperative",
      impact: [
        {
          title: "Women Members",
          value: "120",
        },
        {
          title: "Capital Base",
          value: "NPR 1.5M",
        },
        {
          title: "Businesses Started",
          value: "75",
        },
      ],
      relatedStories: ["sunita-financial-independence", "mayas-organic-farm"],
    },
    {
      id: 6,
      title: "From Dropout to Scholar: Raju's Education Journey",
      slug: "raju-education-journey",
      excerpt: "With support from our scholarship program, Raju returned to school and is now pursuing higher education.",
      content: [
        "Raju Tamang, from a remote village in Sindhupalchok district, had to drop out of school after completing 8th grade. His family, struggling with poverty after the 2015 earthquake, could not afford to continue his education. Instead, Raju started working as a laborer to support his family.",
        "In 2020, Akumaya Foundation's education team identified Raju as a bright student who had been forced to abandon his education due to financial constraints. Through our scholarship program, Raju was offered the opportunity to return to school.",
        "The scholarship covered not only his school fees but also provided for uniforms, books, and other educational materials. Additionally, Raju received mentoring support to help him catch up on the academic content he had missed.",
        "Despite the challenges of returning to school after a two-year gap, Raju showed remarkable determination. He studied diligently and quickly rose to the top of his class. His teachers noted his exceptional abilities in mathematics and science.",
        "In 2022, Raju completed his School Leaving Certificate (SLC) examination with distinction. His outstanding performance earned him a place in a prestigious science college in Kathmandu, where he is now studying on a full scholarship.",
        '"Education was my dream, but I had given up hope. The scholarship gave me a second chance, and I am determined to make the most of it. I want to become an engineer and help develop my community," says Raju.',
        "Raju's story highlights the transformative power of education and the importance of providing opportunities for talented students from disadvantaged backgrounds. By investing in their education, we are not only changing individual lives but also contributing to the long-term development of communities.",
      ],
      category: "Education",
      location: "Sindhupalchok District",
      date: "December 2022",
      image: "/placeholder.svg?height=600&width=1200&text=Raju",
      testimonial:
        "Education was my dream, but I had given up hope. The scholarship gave me a second chance, and I am determined to make the most of it.",
      impact: [
        {
          title: "Years of Education Completed",
          value: "12",
        },
        {
          title: "SLC Score",
          value: "3.8 GPA",
        },
        {
          title: "College Scholarship",
          value: "100%",
        },
      ],
      relatedStories: ["gorkha-school-rebuilding", "digital-learning-rural-school"],
    },
    {
      id: 7,
      title: "Clean Water Brings New Life to Bajura Village",
      slug: "clean-water-bajura",
      excerpt:
        "How our clean water project reduced waterborne diseases and improved quality of life in a remote village in Bajura.",
      content: [
        "In the remote village of Kolti in Bajura district, access to clean water was a daily struggle for residents. Women and children would spend hours each day walking to distant water sources, often collecting water from contaminated streams that caused frequent illness.",
        "In 2021, Akumaya Foundation partnered with the local community and water engineers to implement a comprehensive clean water project. The project involved tapping a natural spring located 3 kilometers from the village and constructing a gravity-fed water system.",
        "The water system includes a collection chamber at the spring source, a main pipeline to the village, a storage tank, and distribution lines to community taps strategically placed throughout the village. The system was designed to serve all 120 households in the community.",
        "Local community members were actively involved in the construction process, contributing labor and local materials. They also formed a water user committee responsible for the operation and maintenance of the system, with training provided by the foundation.",
        "Since the completion of the project in November 2022, the impact on the community has been profound. Health records from the local health post show a 60% reduction in waterborne diseases, particularly among children under five.",
        '"Before, my children were constantly sick with diarrhea. I spent so much time caring for them and walking for water that I couldn\'t do anything else. Now, we have clean water right in our community, and my children are healthier. I even have time to start a small vegetable garden," says Parvati Rokaya, a mother of three.',
        "Beyond health improvements, the project has had broader social and economic benefits. Girls who previously missed school to help collect water now attend regularly. Women use their saved time for income-generating activities and community engagement.",
        "The success of the Kolti water project demonstrates how access to clean water is foundational to community development. By addressing this basic need, we create opportunities for improvements in health, education, and livelihoods.",
      ],
      category: "Healthcare",
      location: "Bajura District",
      date: "November 2022",
      image: "/placeholder.svg?height=600&width=1200&text=Clean Water",
      impact: [
        {
          title: "Households Served",
          value: "120",
        },
        {
          title: "Reduction in Waterborne Diseases",
          value: "60%",
        },
        {
          title: "Time Saved per Household Daily",
          value: "3 hours",
        },
      ],
      relatedStories: ["dolakha-health-camp", "mobile-health-clinic"],
    },
    {
      id: 8,
      title: "Solar Power Lights Up Humla",
      slug: "solar-power-humla",
      excerpt: "Solar power installation in remote Humla villages has transformed daily life, education, and healthcare.",
      content: [
        "Humla district, located in the far northwestern corner of Nepal, is one of the country's most remote and underdeveloped regions. Many villages in Humla are not connected to the national electricity grid, leaving residents dependent on kerosene lamps and firewood for lighting and cooking.",
        "In 2022, Akumaya Foundation launched a renewable energy project in three villages in Humla, aiming to provide clean and sustainable electricity through solar power. The project installed solar panels, batteries, and distribution systems to power homes, schools, and health posts.",
        "The installation process involved significant logistical challenges, as all equipment had to be transported by helicopter or carried on foot due to the absence of road access. Local community members were trained in basic maintenance and troubleshooting of the solar systems.",
        "By October 2022, all three villages had functioning solar power systems, bringing electricity to 250 households, 3 schools, and 2 health posts. The impact on daily life was immediate and transformative.",
        "In homes, electric lighting has replaced kerosene lamps, reducing indoor air pollution and fire hazards. Children can now study after dark, and families can engage in productive activities in the evening hours. Mobile phones and radios can be charged locally, improving communication and access to information.",
        "In schools, electricity has enabled the use of computers and digital learning resources, exposing students to educational content beyond their textbooks. Teachers report increased student engagement and improved learning outcomes.",
        "In health posts, reliable electricity has enhanced the quality of healthcare services. Medical equipment can be operated, vaccines and medicines can be refrigerated, and emergency services can be provided at night.",
        '"Before we had solar power, our health post could only operate during daylight hours. Now, we can provide 24-hour service, including emergency deliveries at night. This has already saved lives in our community," says Karma Lama, a health worker in one of the villages.',
        "The solar power project in Humla demonstrates how renewable energy can leapfrog traditional infrastructure development in remote areas. By harnessing the abundant sunlight in the region, communities can access clean, sustainable electricity without waiting for grid extension.",
      ],
      category: "Disaster Relief",
      location: "Humla District",
      date: "October 2022",
      image: "/placeholder.svg?height=600&width=1200&text=Solar Power",
      impact: [
        {
          title: "Households Electrified",
          value: "250",
        },
        {
          title: "Schools Powered",
          value: "3",
        },
        {
          title: "Health Posts with 24/7 Electricity",
          value: "2",
        },
      ],
      relatedStories: ["rams-new-home", "winter-relief-program"],
    },
    {
      id: 9,
      title: "Maya's Organic Farm: A Model for Sustainable Agriculture",
      slug: "mayas-organic-farm",
      excerpt:
        "After training in organic farming techniques, Maya has established a successful farm that serves as a model for her community.",
      content: [
        "Maya Gurung, a farmer from Chitwan district, had been practicing conventional agriculture for years, relying heavily on chemical fertilizers and pesticides. While her farm produced decent yields, she was concerned about the rising costs of inputs, declining soil fertility, and potential health impacts of chemicals.",
        "In 2021, Maya participated in Akumaya Foundation's sustainable agriculture program, which provided training in organic farming techniques, including composting, natural pest management, crop rotation, and water conservation.",
        "After completing the training, Maya decided to convert one acre of her land to organic production. The foundation provided her with seeds, tools, and ongoing technical support during the transition period, which can be challenging as soil recovers from chemical dependency.",
        "Maya started by growing a diverse range of vegetables using organic methods. She created her own compost using farm waste and prepared natural pest repellents from local plants. She also installed a simple drip irrigation system to conserve water.",
        "Initially, Maya faced skepticism from neighboring farmers who doubted the viability of organic farming. However, as her crops flourished and she began to sell her produce at premium prices in local markets, attitudes began to change.",
        "By September 2022, Maya's organic farm was fully established and thriving. She had expanded her organic production to include all three acres of her land and was growing over 20 varieties of vegetables, fruits, and herbs.",
        "\"Switching to organic farming was the best decision I've made. My production costs have decreased, my soil is healthier, and customers are willing to pay more for my chemical-free produce. Most importantly, I know I'm growing food that is safe for my family and my community,\" says Maya.",
        "Maya's farm has become a learning center for other farmers in the region. Through a farmer-to-farmer training approach, she has shared her knowledge and experience with over 50 other farmers, many of whom have begun to adopt organic practices on their own farms.",
        "The success of Maya's organic farm demonstrates the potential of sustainable agriculture to provide economic, environmental, and health benefits. By supporting farmers in transitioning to organic methods, we can promote food security, environmental sustainability, and rural livelihoods.",
      ],
      category: "Livelihood",
      location: "Chitwan District",
      date: "September 2022",
      image: "/placeholder.svg?height=600&width=1200&text=Maya's Farm",
      testimonial:
        "Switching to organic farming was the best decision I've made. My production costs have decreased, my soil is healthier, and customers are willing to pay more for my chemical-free produce.",
      impact: [
        {
          title: "Organic Land",
          value: "3 acres",
        },
        {
          title: "Crop Varieties",
          value: "20+",
        },
        {
          title: "Farmers Trained",
          value: "50",
        },
      ],
      relatedStories: ["sunita-financial-independence", "womens-cooperative"],
    },
  ]
  
  export function getSuccessStoryBySlug(slug: string): SuccessStory | undefined {
    return successStories.find((story) => story.slug === slug)
  }
  
  export function getRelatedSuccessStories(storySlug: string): SuccessStory[] {
    const story = getSuccessStoryBySlug(storySlug)
    if (!story || !story.relatedStories) return []
  
    return story.relatedStories
      .map((slug) => {
        const relatedStory = getSuccessStoryBySlug(slug)
        if (!relatedStory) return null
        return relatedStory
      })
      .filter(Boolean) as SuccessStory[]
  }
  