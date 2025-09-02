export interface BoardMember {
  id: number;
  name: string;
  role: string;
  pronouns: string;
  image: string;
  biography: string;
  gradientColors: {
    from: string;
    to: string;
    border: string;
    text: string;
  };
}

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: 'Victoria',
    role: 'Co-Chair',
    pronouns: 'she/her',
    image: '/team-members/victoria.avif',
    biography: `Victoria brings an academic life sciences background (Ph.D., Biology) and computer programming expertise to her advocacy work. Her core skills include scholarship; critical thinking; leadership; teamwork; mentoring and educational outreach.

      Victoria transitioned (mtf) while conducting postdoctoral work in North Carolina, where she founded the Durham Gender Alliance, a transgender support group.

      Victoria advocates for universal human rights/social justice and environmental health. She also serves as a volunteer board member for the Dignity Seniors Society (DSS), which is dedicated to affecting systemic change that creates culturally appropriate services for 2SLGBTQIA+ seniors across British Columbia.

      A 2SLGBTQIA+ senior, Victoria fully supports SPNC/RFAC and its mission.In her spare time, Victoria and her long-time partner, Carm, enjoy cooking, exercising, socializing, and listening to music.

      Victoria lives and works on the traditional, ancestral and unceded territories of the Coast Salish peoples - the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and Səl̓ílwətaɬ (Tsleil-Waututh) Nations.`,
    gradientColors: {
      from: 'from-fuchsia-50',
      to: 'to-purple-50',
      border: 'border-fuchsia-200',
      text: 'text-fuchsia-600'
    }
  },
  {
    id: 2,
    name: 'Cheryl',
    role: 'Co-Chair',
    pronouns: 'she/her',
    image: '/team-members/cheryl.avif',
    biography: [
      [
        "Cheryl Loadman is a faculty member of the Edwards School of Business at the University of Saskatchewan. Prior to joining Edwards, her career included Executive Director of Saskatoon Services for Seniors, project consultant with Saskatoon Council on Aging, Chief of Staff to the Minister of Finance, and a long career with the Ministry of the Economy in the Saskatchewan government.",
        "",
        "She is an active and loud voice of the older queer adult. In the last number of years, Cheryl has been active in the Queer community as a Director of Queer Seniors of Saskatchewan, which works to advance the interests of 2SLGBTQ+ seniors across Saskatchewan, and of Spark Your Pride, which works to raise awareness of the history and stories of the older queer community. She has served on EGAL Canada advisory committee on queer seniors' care. She is a founding member of the Seniors Pride Network Canada, working to coordinate and elevate queer seniors in Canada's social, economic, and political fabric. She is active on her church-affirming committee and is a host of other queer-focused advocacy initiatives.",
        "",
        "As a community organizer and activist, Cheryl is and has been a member of many local, provincial, and national boards and committees and is an active volunteer in charitable work across Saskatoon and the provincial community."
      ].join('\n')
    ].join('\n'),
    gradientColors: {
      from: 'from-fuchsia-50',
      to: 'to-purple-50',
      border: 'border-fuchsia-200',
      text: 'text-fuchsia-600'
    }
  },
  {
    id: 3,
    name: 'Carmen',
    role: 'Secretary',
    pronouns: 'she/her',
    image: '/team-members/carmen.avif',
    biography: 'Carmen brings 30 years of experience in local, provincial, and national LGBTQ activism. With expertise in strategic planning, she recognizes the important role of Senior Pride Network Canada among national LGBTQ organizations. Carmen believes she functions well on a board of directors and seeks to age with dignity after years of activism. Residing in Ottawa, she possesses valuable knowledge of federal political processes.',
    gradientColors: {
      from: 'from-blue-50',
      to: 'to-indigo-50',
      border: 'border-blue-200',
      text: 'text-blue-600'
    }
  },
  {
    id: 4,
    name: 'Daniel',
    role: 'Treasurer',
    pronouns: 'he/him',
    image: '/team-members/daniel.avif',
    biography: `Daniel, based in Halifax, is passionate about improving the lives of 2SLGBTQI+ seniors, believing a national organization can offer valuable support and solutions. His dedication to the community spans four decades, notably as publisher of Waves Magazine, Atlantic Canada's LGBT publication, for 40 years. For 20 years, he has also published the Halifax Rainbow Encyclopedia, a comprehensive resource documenting queer life in Halifax.
                
                Daniel's focus lies in practical action, government interaction, and policy critique impacting senior queers. As a founding board member of the Elderberries (Nova Scotia LGBT Elders Association) since 2011, he has deep experience in addressing seniors' needs. He prefers work with immediate, tangible results, though he has experience with internal board procedures. Daniel aims to represent Nova Scotia and address its unique challenges and contributions.`,
    gradientColors: {
      from: 'from-emerald-50',
      to: 'to-green-50',
      border: 'border-emerald-200',
      text: 'text-emerald-600'
    }
  },
  {
    id: 5,
    name: 'Tom',
    role: 'Board Member',
    pronouns: 'he/him',
    image: '/team-members/tom.avif',
    biography: `Tom Warner (he/him) has been an activist and advocate for 2SLGBTQI+ rights for over 50 years. In 1971, he helped found the Gay Students’ Alliance at the University of Saskatchewan and the Zodiac Friendship Society, the first gay community organization that later became the Gay Community Centre of Saskatoon. After moving to Toronto in 1973, he helped to found and was active for several years in the Gay Alliance Toward Equality, including serving as president.

          He has also been active in a number of other 2SLGBTQI+ groups over the years, including The Body Politic Collective, the Right To Privacy Committee (founding member), the Committee to Defend John Damien, the Association of Gay Electors and the City of Toronto’s Committee on Lesbian and Gay Issues. Tom is perhaps best known as a founding member of and leading spokesperson for the Coalition for Lesbian and Gay Rights in Ontario (CLGRO) from 1975 to 2009.

          He was a leader of political action campaigns in the 1970s and 1980s to have sexual orientation included as a prohibited ground of discrimination in the Ontario Human Rights Code and during the 1990s to amend Ontario laws to extend legal recognition to same-sex spousal relationships. He has served as a Commissioner of the Ontario Human Rights Commission, as a member of the Board of Canadian Blood Services, including serving as Vice Chair, as a member of the Board of Management (a director) of The 519 Church Street Community Centre in Toronto and as a director of the Advocacy Centre for the Elderly in Toronto. Most recently, Tom has been active in and is the past Chair of The Senior Pride Network Toronto.

          He is also the author of two books: Losing Control, Canada’s Social Conservatives in the Age of Rights (2010) and Never Going Back, A history of queer activism in Canada (2002). Professionally, Tom was employed with the Institute of Chartered Accountants of Ontario and Chartered Professional Accountants of Ontario (CPA Ontario) from 1980 until his retirement in 2016. He held several regulatory and senior executive positions, including Vice President and Registrar and Vice President, Regulatory and Standards. In 2016, Tom was elected as the first Honorary Chartered Professional Accountant in Ontario.`,
    gradientColors: {
      from: 'from-gray-50',
      to: 'to-slate-50',
      border: 'border-gray-200',
      text: 'text-gray-600'
    }
  },
  // {
  //   id: 6,
  //   name: 'Ada',
  //   role: 'Board Member',
  //   image: 'https://placehold.co/80x80/6B7280/FFFFFF?text=A',
  //   biography: 'Ada is a passionate advocate for 2SLGBTQI+ rights with a particular focus on intersectional issues affecting seniors of color and immigrant communities. She brings valuable perspective on diversity, equity, and inclusion initiatives. With a background in social services and community development, Ada helps ensure our programs are culturally responsive and accessible to all members of our diverse community.',
  //   gradientColors: {
  //     from: 'from-gray-50',
  //     to: 'to-slate-50',
  //     border: 'border-gray-200',
  //     text: 'text-gray-600'
  //   }
];

export const getBoardMemberById = (id: number): BoardMember | undefined => {
  return boardMembers.find(member => member.id === id);
};

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  pronouns: string;
  image: string;
  biography: string;
  gradientColors: {
    from: string;
    to: string;
    border: string;
    text: string;
  };
}

export const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: 'Martin',
    role: 'Coordinator',
    pronouns: 'he/him',
    image: '/team-members/martin.avif',
    biography: `Martin Krajcik (he/him/his) is a passionate advocate dedicated to improving the lives of 2SLGBTQI+ (Two-Spirit, Lesbian, Gay, Bisexual, Trans, Queer, Questioning, Intersex and others) older adults. As the coordinator of SPNC/RFAC, a national organization focused on queer aging, Martin brings his expertise and commitment to identifying and addressing the unique challenges faced by this community.

With over two decades of experience as a human rights educator, Martin has played a crucial role in creating safer and more inclusive environments for 2SLGBTQI+ older adults. He delivers engaging workshops to professionals and the public, fostering understanding, acceptance, and celebration of the lives and experiences of 2SLGBTQI+ older adults.

Martin is committed to empowering 2SLGBTQI+ older adult communities, raising awareness, and advocating for policies that promote their well-being and dignity. Through his work with SPNC/RFAC, Martin's ultimate goal is to ensure that 2SLGBTQI+ older adults can live openly, authentically, and without fear of discrimination.`,
    gradientColors: {
      from: 'from-orange-50',
      to: 'to-amber-50', 
      border: 'border-orange-200',
      text: 'text-orange-600'
    }
  }
];

export const getAllBoardMembers = (): BoardMember[] => {
  return boardMembers;
};

export const getAllStaffMembers = (): StaffMember[] => {
  return staffMembers;
};

export const getStaffMemberById = (id: number): StaffMember | undefined => {
  return staffMembers.find(member => member.id === id);
};