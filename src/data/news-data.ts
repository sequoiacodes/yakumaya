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
    title: "Helping Hands on Humla: Medical Outreach",
    slug: "helping-hands-humla",
    excerpt:
      "Our team provided vital medical services to remote communities in Humla, reaching over 500 people who otherwise have limited access to healthcare.",
    content: `
      <p>On May 15, 2023, Yakumaya Helping Hands Foundation Nepal successfully conducted a three-day medical outreach program in Humla district, providing essential healthcare services to over 500 people from some of Nepal's most isolated communities.</p>
      
      <p>The outreach initiative was organized in collaboration with local health authorities and volunteer doctors from Kathmandu. Services provided included general health check-ups, eye examinations, dental care, and awareness sessions on preventive healthcare.</p>
      
      <p>"Many residents in Humla have to walk for days to reach the nearest health facility. This outreach effort brought critical healthcare services directly to these remote villages," said Dr. Ramesh Sharma, who led the medical team.</p>
      
      <p>The program also distributed free medicines and eyeglasses to those in need. Follow-up care was arranged for patients requiring further treatment.</p>
      
      <p>This initiative is part of our ongoing commitment to improving healthcare access in Nepal's most underserved regions. We plan to organize similar outreach programs in other remote districts in the coming months.</p>
      
      <p>We extend our heartfelt gratitude to all the medical professionals, volunteers, and donors who made this outreach possible.</p>
    `,
    date: "May 15, 2023",
    imageUrl: "/humla1.jpeg?height=400&width=600&text=Health Camp",
    categories: ["Healthcare", "Events"],
    tags: ["Health Camp", "Humla", "Healthcare", "Medical Services"],
    author: "Admin",
  },
  {
    id: 2,
    title: "Helping Hands on Scholarship: Supporting Higher Education",
    slug: "helping-hands-scholarship",
    excerpt:
      "We're proud to announce our new scholarship program supporting 50 underprivileged students to pursue higher education in various fields.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal is proud to announce the launch of our comprehensive scholarship program supporting 50 underprivileged students to pursue higher education. The program was officially inaugurated on April 28, 2023, in Kathmandu.</p>
      
      <p>The scholarship initiative was launched by Mr. Binod Chaudhary, a prominent business leader and philanthropist, in the presence of educational authorities, community leaders, and beneficiaries.</p>
      
      <p>The scholarship program will provide:</p>
      
      <ul>
        <li>Full tuition coverage for undergraduate studies</li>
        <li>Monthly stipend for living expenses</li>
        <li>Educational materials and resources</li>
        <li>Mentorship from professionals in relevant fields</li>
        <li>Career counseling and job placement support</li>
      </ul>
      
      <p>"Education is the most powerful tool for breaking the cycle of poverty. This scholarship program represents our commitment to ensuring that talented young people aren't denied educational opportunities due to financial constraints," said Sunita Gurung, Program Director at Yakumaya Foundation.</p>
      
      <p>The scholarship recipients were selected through a rigorous process based on academic merit, financial need, and personal motivation. They will be pursuing degrees in fields including medicine, engineering, education, agriculture, and social sciences.</p>
      
      <p>This initiative is supported by various corporate partners and individual donors who share our vision of creating educational opportunities for Nepal's future leaders.</p>
    `,
    date: "April 28, 2023",
    imageUrl: "/new2.jpeg?height=400&width=600&text=Scholarship Program",
    categories: ["Education", "Youth Development"],
    tags: [
      "Scholarships",
      "Higher Education",
      "Youth Empowerment",
      "Poverty Reduction",
    ],
    author: "Admin",
  },
  {
    id: 3,
    title: "Helping Hands on Educational Stationery Distribution",
    slug: "educational-stationery-distribution",
    excerpt:
      "Our foundation distributed essential educational stationery to 2,000 students across 15 schools in rural Nepal to support their learning journey.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal is pleased to announce the successful completion of our Educational Stationery Distribution program for the academic year 2022-2023. The initiative provided essential learning materials to 2,000 students across 15 schools in rural Nepal.</p>
      
      <p>Key highlights from the program include:</p>
      
      <ul class="list-disc space-y-2 pl-6">
        <li class="">Distribution of comprehensive stationery kits to each student</li>
        <li class="">Each kit contained notebooks, pens, pencils, rulers, erasers, and geometry boxes</li>
        <li class="">Additional teaching aids provided to each participating school</li>
        <li class="">Art supplies distributed to encourage creative expression</li>
        <li class="">Reading books provided to enhance school libraries</li>
        <li class="">Teacher resource materials supplied to improve instruction quality</li>
        <li class="">Special learning materials for students with disabilities</li>
      </ul>
      
      <p>The distribution program targeted schools in areas where families struggle to afford basic educational supplies, ensuring that lack of materials doesn't become a barrier to learning.</p>
      
      <p>"Having proper learning materials is fundamental to educational success. This initiative aims to reduce the financial burden on families while ensuring students have the tools they need to engage fully in their education," said Maya Tamang, Education Program Coordinator.</p>
      
      <p>The program was implemented in close collaboration with local education authorities and school management committees to ensure appropriate and fair distribution.</p>
      
      <p>We express our sincere gratitude to all our supporters, partners, and team members who contributed to making this initiative successful.</p>
    `,
    date: "April 10, 2023",
    imageUrl: "/new3.jpeg?height=400&width=600&text=Stationery Distribution",
    categories: ["Education", "Donations"],
    tags: ["Educational Materials", "School Supplies", "Rural Education", "Student Support"],
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
    imageUrl: "/new4.jpeg?height=400&width=600&text=Women Entrepreneurs",
    categories: ["Livelihood", "Women Empowerment"],
    tags: ["Women Empowerment", "Entrepreneurship", "Livelihood", "Kavre"],
    author: "Admin",
  },
  {
    id: 6,
    title: "Partnership Announced with Local Churches for Joint Ventures",
    slug: "partnership-local-churches-joint-ventures",
    excerpt:
      "We're excited to announce our new partnerships with several local churches across Nepal to expand our community development initiatives.",
    content: `
      <p>Yakumaya Helping Hands Foundation Nepal is pleased to announce new strategic partnerships with several local churches across Nepal to implement joint community development initiatives. The partnerships were formalized through a series of Memorandums of Understanding signed on February 20, 2023.</p>
      
      <p>Through these collaborations, we will implement various projects focused on holistic community development in underserved areas. The joint initiatives will leverage the churches' community connections and Yakumaya's development expertise.</p>
      
      <p>Key components of these partnerships include:</p>
      
      <ul>
        <li>Youth mentorship and leadership development programs</li>
        <li>Community health awareness campaigns</li>
        <li>Education support for vulnerable children</li>
        <li>Vocational training for unemployed community members</li>
        <li>Family counseling and support services</li>
        <li>Joint emergency response during disasters</li>
      </ul>
      
      <p>"These partnerships represent a significant opportunity to combine our resources and strengths to serve communities more effectively. The local churches bring deep community connections and trust, while we bring development expertise and implementation capabilities," said Rajesh Sharma, Executive Director of Yakumaya Foundation.</p>
      
      <p>The churches will help identify community needs and mobilize local volunteers, while Yakumaya Foundation will provide technical expertise, training, and coordinate resource mobilization efforts.</p>
      
      <p>"We are excited to partner with Yakumaya Foundation, whose commitment to holistic community development aligns with our mission to serve our communities. Together, we can make a greater impact than either of us could alone," said Pastor Samuel Tamang, representing the network of partner churches.</p>
      
      <p>Initial joint projects have already begun in five districts, with plans to expand to ten districts by the end of 2023. The partnerships are expected to benefit approximately 3,000 families across these communities.</p>
    `,
    date: "February 20, 2023",
    imageUrl: "/new6.jpeg?height=400&width=600&text=Church Partnership",
    categories: ["Partnerships", "Community Development"],
    tags: ["Partnership", "Churches", "Community Development", "Joint Ventures"],
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
    title: "Yakumaya Foundation Celebrates 1st Anniversary",
    slug: "1st-anniversary-celebration",
    excerpt:
      "Yakumaya Helping Hands Foundation Nepal marked its 1st anniversary with a celebration highlighting a decade of impact across Nepal.",
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
