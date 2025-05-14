export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  categories: string[];
  tags: string[];
  author: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Health Camp Successfully Conducted in Dolakha",
    slug: "health-camp-dolakha",
    excerpt:
      "Our team conducted a free health camp in Dolakha district, providing medical services to over 500 people from remote villages who otherwise have limited access to healthcare.",
    content: `
      <p>On May 15, 2023, Yakumaya Helping Hands Foundation Nepal successfully conducted a three-day health camp in Dolakha district, providing essential medical services to over 500 people from remote villages.</p>
      
      <p>The health camp was organized in collaboration with local health authorities and volunteer doctors from Kathmandu. Services provided included general health check-ups, eye examinations, dental care, and awareness sessions on preventive healthcare.</p>
      
      <p>"Many people in these remote areas have to walk for hours to reach the nearest health facility. This camp brought healthcare services directly to their community," said Dr. Ramesh Sharma, who led the medical team.</p>
      
      <p>The camp also distributed free medicines and eyeglasses to those in need. Follow-up care was arranged for patients requiring further treatment.</p>
      
      <p>This initiative is part of our ongoing commitment to improving healthcare access in underserved communities across Nepal. We plan to organize similar camps in other remote districts in the coming months.</p>
      
      <p>We extend our heartfelt gratitude to all the medical professionals, volunteers, and donors who made this health camp possible.</p>
    `,
    date: "May 15, 2023",
    imageUrl: "/camp2.png?height=400&width=600&text=Health Camp",
    categories: ["Healthcare", "Events"],
    tags: ["Health Camp", "Dolakha", "Healthcare", "Medical Services"],
    author: "Admin",
  },
  {
    id: 2,
    title: "New Vocational Training Center Inaugurated",
    slug: "vocational-training-center",
    excerpt:
      "We're proud to announce the opening of our new vocational training center in Kathmandu, offering skills development programs for underprivileged youth and women.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal is proud to announce the inauguration of our new Vocational Training Center in Kathmandu on April 28, 2023. The center will offer skills development programs for underprivileged youth and women, focusing on employable skills that can lead to sustainable livelihoods.</p>
      
      <p>The center was inaugurated by Mr. Binod Chaudhary, a prominent business leader and philanthropist, in the presence of local government officials, community leaders, and beneficiaries.</p>
      
      <p>The facility is equipped with modern training equipment and will initially offer courses in tailoring, computer skills, beauty and wellness, and hospitality. Each course is designed to be practical and market-oriented, with a focus on both technical skills and entrepreneurship.</p>
      
      <p>"This center represents our commitment to economic empowerment through skills development. By providing quality vocational training, we aim to help individuals become self-reliant and contribute to their communities," said Sunita Gurung, Program Director at Yakumaya Foundation.</p>
      
      <p>The first batch of 50 trainees has already been enrolled, with classes set to begin next week. The foundation plans to train over 200 individuals in the first year of operation.</p>
      
      <p>This initiative is supported by various corporate partners and individual donors who share our vision of creating sustainable livelihood opportunities for marginalized communities.</p>
    `,
    date: "April 28, 2023",
    imageUrl: "/voca.png?height=400&width=600&text=Training Center",
    categories: ["Livelihood", "Education"],
    tags: [
      "Vocational Training",
      "Skills Development",
      "Women Empowerment",
      "Youth",
    ],
    author: "Admin",
  },
  {
    id: 3,
    title: "Annual Report 2022-2023 Released",
    slug: "annual-report-2022-2023",
    excerpt:
      "Our annual report highlighting our achievements, challenges, and financial transparency for the past year is now available for public viewing.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal is pleased to announce the release of our Annual Report for the fiscal year 2022-2023. The report provides a comprehensive overview of our programs, achievements, challenges, and financial statements for the past year.</p>
      
      <p>Key highlights from the report include:</p>
      
      <ul class="list-disc space-y-2 pl-6">
        <li class="">Implemented 20 community development projects across 5 districts</li>
        <li class="">Successfully implemented 15 projects across 10 districts in Nepal</li>
        <li class="">Directly benefited over 10,000 individuals through various programs</li>
        <li class="">Rebuilt 5 schools damaged by natural disasters</li>
        <li class="">Conducted 8 health camps serving over 3,000 patients</li>
        <li class="">Provided vocational training to 300 women and youth</li>
        <li class="">Expanded our disaster preparedness program to 5 new communities</li>
      </ul>
      
      <p>The report also details our financial management, with complete transparency on how funds were allocated and utilized across different programs and operational expenses.</p>
      
      <p>"We believe in complete transparency and accountability to our donors, partners, and the communities we serve. This annual report reflects our commitment to responsible stewardship of resources and impactful programming," said Rajesh Sharma, Executive Director.</p>
      
      <p>The full report is available for download on our website or can be requested in print form from our office.</p>
      
      <p>We extend our sincere gratitude to all our supporters, partners, and team members who contributed to our work over the past year.</p>
    `,
    date: "April 10, 2023",
    imageUrl: "/report.png?height=400&width=600&text=Annual Report",
    categories: ["Announcements", "Reports"],
    tags: ["Annual Report", "Transparency", "Accountability"],
    author: "Admin",
  },
  {
    id: 4,
    title: "School Rebuilding Project Completed in Sindhupalchok",
    slug: "school-rebuilding-sindhupalchok",
    excerpt:
      "We've successfully completed the rebuilding of Shree Janata Secondary School in Sindhupalchok, which was severely damaged during the 2015 earthquake.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal is delighted to announce the successful completion of our school rebuilding project in Sindhupalchok district. The Shree Janata Secondary School, which was severely damaged during the 2015 earthquake, has been rebuilt and is now ready to welcome students back to a safe learning environment.</p>
      
      <p>The newly constructed school features:</p>
      
      <ul class="list-disc space-y-2 pl-6">
        <li class="">10 earthquake-resistant classrooms</li>
        <li class="">A computer lab with 20 computers</li>
        <li class="">A science laboratory</li>
        <li class="">A library with over 1,000 books</li>
        <li class="">Separate toilet facilities for boys and girls</li>
        <li class="">Clean drinking water facilities</li>
        <li class="">A playground with sports equipment</li>
      </ul>
      
      <p>The school was handed over to the local community in a ceremony attended by government officials, community leaders, teachers, students, and parents. The event marked a significant milestone in our ongoing efforts to rebuild educational infrastructure damaged by the earthquake.</p>
      
      <p>"Education is the foundation of development. By rebuilding this school, we're not just constructing a building; we're rebuilding the future of these children and their community," said Anita Rai, Project Coordinator.</p>
      
      <p>The project was implemented in close collaboration with the local community, who contributed labor and local materials. This participatory approach ensured community ownership and sustainability of the project.</p>
      
      <p>We extend our heartfelt gratitude to our donors and partners who made this project possible, and to the community for their active participation and support throughout the implementation.</p>
    `,
    date: "March 25, 2023",
    imageUrl: "/children.jpg?height=400&width=600&text=School Rebuilding",
    categories: ["Education", "Disaster Relief"],
    tags: [
      "School Rebuilding",
      "Earthquake Recovery",
      "Education",
      "Sindhupalchok",
    ],
    author: "Admin",
  },
  {
    id: 5,
    title: "Women's Entrepreneurship Program Launches in Kavre",
    slug: "womens-entrepreneurship-kavre",
    excerpt:
      "Our new Women's Entrepreneurship Program has launched in Kavre district, aiming to support 100 women in starting and growing their own businesses.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal has launched a new Women's Entrepreneurship Program in Kavre district, designed to support 100 women in starting and growing their own businesses. The program was officially launched on March 8, 2023, coinciding with International Women's Day.</p>
      
      <p>The comprehensive program includes:</p>
      
      <ul>
        <li>Business skills training</li>
        <li>Financial literacy workshops</li>
        <li>Seed funding for business startups</li>
        <li>Mentorship from established entrepreneurs</li>
        <li>Market linkage support</li>
        <li>Ongoing business coaching</li>
      </ul>
      
      <p>The program targets women from marginalized communities who have limited access to economic opportunities. Participants were selected based on their motivation, potential business ideas, and need for support.</p>
      
      <p>"Economic empowerment is crucial for women's overall empowerment. When women have their own source of income, they gain confidence, decision-making power, and respect in their families and communities," said Sunita Gurung, Program Director.</p>
      
      <p>The first batch of 50 women has already begun their training, with businesses ranging from agriculture and food processing to handicrafts and retail. The remaining 50 participants will join the program in the second phase starting in June 2023.</p>
      
      <p>This initiative is supported by various corporate partners and individual donors who share our commitment to women's economic empowerment.</p>
      
      <p>We look forward to sharing the success stories of these women entrepreneurs in the coming months.</p>
    `,
    date: "March 8, 2023",
    imageUrl: "/profile1.png?height=400&width=600&text=Women Entrepreneurs",
    categories: ["Livelihood", "Women Empowerment"],
    tags: ["Women Empowerment", "Entrepreneurship", "Livelihood", "Kavre"],
    author: "Admin",
  },
  {
    id: 6,
    title: "Partnership Announced with Global Education Fund",
    slug: "partnership-global-education-fund",
    excerpt:
      "We're excited to announce our new partnership with the Global Education Fund to expand our education programs in rural Nepal.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal is pleased to announce a new strategic partnership with the Global Education Fund (GEF) to expand our education programs in rural Nepal. The partnership was formalized through a Memorandum of Understanding signed on February 20, 2023.</p>
      
      <p>Through this collaboration, we will implement a three-year project titled "Quality Education for Rural Nepal," which aims to improve educational outcomes for children in underserved rural communities. The project will be implemented in 20 schools across 5 districts.</p>
      
      <p>Key components of the project include:</p>
      
      <ul>
        <li>Teacher training and professional development</li>
        <li>Provision of learning materials and resources</li>
        <li>Establishment of school libraries and resource centers</li>
        <li>Scholarship support for marginalized students</li>
        <li>Parent and community engagement initiatives</li>
        <li>School infrastructure improvements</li>
      </ul>
      
      <p>"This partnership represents a significant step forward in our efforts to ensure quality education for all children, regardless of their geographic location or socioeconomic background," said Rajesh Sharma, Executive Director of Yakumaya Foundation.</p>
      
      <p>The Global Education Fund will provide technical expertise and financial support, while Yakumaya Foundation will lead the implementation on the ground, leveraging our deep understanding of local contexts and established community relationships.</p>
      
      <p>"We are excited to partner with Yakumaya Foundation, whose commitment to education and community-led development aligns perfectly with our mission. Together, we can make a meaningful difference in the lives of thousands of children in rural Nepal," said Sarah Johnson, Regional Director of GEF.</p>
      
      <p>The project is expected to benefit approximately 5,000 students and 200 teachers over the three-year period.</p>
    `,
    date: "February 20, 2023",
    imageUrl: "/gala.png?height=400&width=600&text=Partnership",
    categories: ["Education", "Partnerships"],
    tags: ["Education", "Partnership", "Rural Development"],
    author: "Admin",
  },
  {
    id: 7,
    title: "Winter Relief Distribution Completed in Humla",
    slug: "winter-relief-humla",
    excerpt:
      "Our team has successfully completed the distribution of winter relief supplies to 500 families in the remote district of Humla.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal has successfully completed the distribution of winter relief supplies to 500 vulnerable families in the remote district of Humla. The distribution, which took place from January 15-25, 2023, was part of our annual Winter Relief Program targeting high-altitude communities that face extreme cold conditions.</p>
      
      <p>Each family received a relief package containing:</p>
      
      <ul>
        <li>Warm blankets (2 per family)</li>
        <li>Winter clothing (jackets, hats, gloves)</li>
        <li>Hot water bottles</li>
        <li>Nutritional supplements</li>
        <li>Solar lamps</li>
        <li>Basic medicines for common winter ailments</li>
      </ul>
      
      <p>The distribution focused on the most vulnerable households, including those headed by elderly individuals, single women, and families with young children or persons with disabilities.</p>
      
      <p>"Winters in Humla can be extremely harsh, with temperatures dropping well below freezing. Many families struggle to stay warm, especially those living in traditional houses with minimal insulation. These supplies will help them cope better with the cold weather," said Binod Thapa, who led the distribution team.</p>
      
      <p>The team faced significant logistical challenges in reaching some of the remote settlements, with staff having to trek for hours carrying supplies to villages not accessible by road.</p>
      
      <p>"Despite the challenges, seeing the relief and gratitude on people's faces made all the effort worthwhile," added Thapa.</p>
      
      <p>This initiative was made possible through the generous support of our donors and the dedication of our field team and local volunteers.</p>
    `,
    date: "January 30, 2023",
    imageUrl: "/helpfood.jpg?height=400&width=600&text=Winter Relief",
    categories: ["Disaster Relief", "Humanitarian Aid"],
    tags: ["Winter Relief", "Humla", "Humanitarian Aid"],
    author: "Admin",
  },
  {
    id: 8,
    title: "Youth Leadership Workshop Empowers 50 Young Leaders",
    slug: "youth-leadership-workshop",
    excerpt:
      "Our recent Youth Leadership Workshop brought together 50 young leaders from across Nepal for a week of intensive training and networking.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal recently conducted a Youth Leadership Workshop that brought together 50 young leaders from across Nepal for a week of intensive training, skill-building, and networking. The workshop, held from January 10-16, 2023, aimed to empower youth to become change-makers in their communities.</p>
      
      <p>The participants, aged 18-25, represented diverse geographic regions and socioeconomic backgrounds but shared a common commitment to community development and social change.</p>
      
      <p>The workshop curriculum covered a range of topics, including:</p>
      
      <ul>
        <li>Leadership styles and effective leadership</li>
        <li>Project planning and management</li>
        <li>Community mobilization techniques</li>
        <li>Public speaking and communication skills</li>
        <li>Problem-solving and critical thinking</li>
        <li>Fundraising and resource mobilization</li>
        <li>Networking and collaboration</li>
      </ul>
      
      <p>Sessions were facilitated by experienced trainers, successful entrepreneurs, and community leaders who shared their knowledge and experiences with the participants.</p>
      
      <p>"Young people have the energy, creativity, and passion to drive positive change. Our goal is to equip them with the skills, knowledge, and networks they need to translate their ideas into action," said Anita Rai, Youth Program Coordinator.</p>
      
      <p>As part of the workshop, participants developed action plans for community initiatives they will implement in their respective areas. These initiatives address various issues, from environmental conservation to education and health awareness.</p>
      
      <p>The foundation will provide small grants and mentoring support to help participants implement their projects over the next six months.</p>
      
      <p>"This workshop has been transformative. I've gained not only new skills but also the confidence to lead change in my community. The network of like-minded young people I've connected with here is invaluable," said Rajan Tamang, a participant from Dhading district.</p>
    `,
    date: "January 18, 2023",
    imageUrl: "/youth.png?height=400&width=600&text=Youth Workshop",
    categories: ["Education", "Youth Development"],
    tags: ["Youth Leadership", "Workshop", "Capacity Building"],
    author: "Admin",
  },
  {
    id: 9,
    title: "Clean Water Project Inaugurated in Bajura",
    slug: "clean-water-project-bajura",
    excerpt:
      "Our new clean water project in Bajura district will provide safe drinking water to over 1,000 people in three remote villages.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal is proud to announce the successful completion and inauguration of a clean water project in Bajura district. The project, completed in December 2022, will provide safe drinking water to over 1,000 people in three remote villages that previously had limited access to clean water sources.

      <p>The water system includes:</p>
      
      <ul>
        <li>A protected spring source</li>
        <li>A water treatment facility</li>
        <li>Storage tanks with a combined capacity of 30,000 liters</li>
        <li>Distribution network with 15 community tap stands</li>
        <li>Water quality monitoring equipment</li>
      </ul>
      
      <p>Prior to this project, villagers had to walk up to two hours daily to collect water from distant sources, a burden that fell primarily on women and children. The new water system brings clean water directly to the communities, significantly reducing the time and effort spent on water collection.</p>
      
      <p>"Access to clean water is a fundamental right and a prerequisite for health and development. This project will not only reduce waterborne diseases but also free up time for education and productive activities, especially for women and girls," said Binod Thapa, Project Manager.</p>
      
      <p>The project was implemented using a community-based approach, with local residents contributing labor and participating in all stages of planning and implementation. A Water User Committee has been formed and trained to manage and maintain the system, ensuring its sustainability.</p>
      
      <p>This initiative was made possible through the generous support of our donors and the active participation of the local community.</p>
    `,
    date: "December 20, 2022",
    imageUrl: "/homehero.jpg?height=400&width=600&text=Clean Water",
    categories: ["Healthcare", "Infrastructure"],
    tags: ["Clean Water", "Bajura", "Health", "Infrastructure"],
    author: "Admin",
  },
  {
    id: 10,
    title: "Yakumaya Foundation Celebrates 10th Anniversary",
    slug: "10th-anniversary-celebration",
    excerpt:
      "Yakumaya Helping Hands Foundation Nepal marked its 10th anniversary with a celebration highlighting a decade of impact across Nepal.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal celebrated its 10th anniversary on December 10, 2022, marking a decade of dedicated service and impact across Nepal. The milestone was commemorated with an event in Kathmandu that brought together staff, beneficiaries, partners, donors, and government representatives.</p>
      
      <p>The celebration featured:</p>
      
      <ul>
        <li>A photo exhibition showcasing the foundation's journey and impact over the past decade</li>
        <li>Testimonials from beneficiaries whose lives have been transformed through our programs</li>
        <li>Recognition of long-serving staff and outstanding volunteers</li>
        <li>Cultural performances by children from our education programs</li>
        <li>Launch of a commemorative publication documenting our 10-year history</li>
      </ul>
      
      <p>Since its establishment in 2012, Yakumaya Foundation has implemented over 100 projects across 25 districts in Nepal, directly benefiting more than 100,000 individuals. Our work has spanned education, healthcare, livelihood, disaster relief, and women empowerment.</p>
      
      <p>"As we reflect on the past decade, we are filled with gratitude for all those who have been part of this journey – our dedicated team, generous donors, committed partners, and most importantly, the communities we serve who have welcomed us and worked alongside us," said Rajesh Sharma, Executive Director and founder of the organization.</p>
      
      <p>The event also served as a platform to unveil the foundation's strategic plan for the next five years, which focuses on scaling successful programs, strengthening community resilience, and advocating for systemic change.</p>
      
      <p>"While we celebrate our achievements, we also recognize the challenges that lie ahead. We remain committed to our mission of empowering communities and transforming lives across Nepal," added Sharma.</p>
      
      <p>The foundation expressed its sincere gratitude to all stakeholders who have contributed to its growth and impact over the past decade.</p>
    `,
    date: "December 12, 2022",
    imageUrl: "/logoYa.png?height=400&width=600&text=10th Anniversary",
    categories: ["Announcements", "Events"],
    tags: ["Anniversary", "Celebration", "Milestone"],
    author: "Admin",
  },
];
