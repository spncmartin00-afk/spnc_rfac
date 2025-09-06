export interface Member {
  id: number;
  name: string;
  province: string;
  description?: string;
  logo?: string;
  isFeatured?: boolean;
  membershipType: 'frontline' | 'allied';
  profileUrl?: string;
}

export const memberOrganizations: Member[] = [
  { 
    id: 1, 
    name: 'Gay and Grey Montreal', 
    province: 'Quebec',
    description: 'Gay and Grey Montréal is a non-profit supporting English‑speaking 2SLGBTQIA+ older adults (50+) in and around Montréal. They focus on improving quality of life by offering services, social events, and welcoming spaces that help members and the broader 2SLGBTQIA+ community connect.',
    logo: '/members/gay&gray.png',
    isFeatured: true,
    membershipType: 'frontline',
    profileUrl: 'https://gayandgreymontreal.com/'
  },
  { 
    id: 2, 
    name: 'Dignity Seniors Society', 
    province: 'Vancouver',
    description: 'Dignity Seniors Society (DSS) advances systemic change to ensure culturally appropriate services for 2SLGBTQIA+ seniors. They engage and support older adults in ways that are meaningful to them, strengthening inclusion and access across community and care settings.',
    logo: '/members/diginityseniors.png',
    isFeatured: true,
    membershipType: 'frontline',
    profileUrl: 'https://www.dignityseniors.org/#gsc.tab=0'
  },
  { 
    id: 3, 
    name: 'Ottawa Senior Pride Network', 
    province: 'Ottawa',
    description: 'The Ottawa Senior Pride Network (OSPN) is a volunteer-run community organization that supports 2SLGBTQIA+ older adults. OSPN provides social activities, peer support, information and referrals, and advocacy to foster connections and promote the well-being of seniors in the Ottawa region.',
    logo: '/members/ottawa_senior.png',
    isFeatured: true,
    membershipType: 'frontline',
    profileUrl: 'https://ospn-rfao.ca/'
  },
  {
    id: 4,
    name: 'Advocacy Canada',
    province: 'National',
    description: 'A national organization dedicated to advancing 2SLGBTQI+ rights and equality across Canada through advocacy and legal reform.',
    isFeatured: false,
    membershipType: 'allied',
    profileUrl: 'https://advocacy-canada.lgbt/'
  },
  {
    id: 5,
    name: 'Bridge City Chorus',
    province: 'Saskatchewan',
    description: 'Saskatoon\'s 2SLGBTQI+ affirming chorus, fostering community through music and performance.',
    isFeatured: false,
    membershipType: 'allied',
    profileUrl: 'https://www.facebook.com/p/Bridge-City-Chorus-100057390222528/'
  },
  {
    id: 6,
    name: 'Coffee Row',
    province: 'Saskatchewan',
    description: 'A social gathering for 2SLGBTQI+ individuals, fostering connection and reducing isolation in Saskatoon.',
    isFeatured: false,
    membershipType: 'allied',
    profileUrl: 'https://www.facebook.com/OUTSask/'
  },
  {
    id: 7,
    name: 'Elderberries',
    province: 'Nova Scotia',
    description: 'A social group for older 2SLGBTQI+ adults in Halifax, fostering connection and community engagement.',
    isFeatured: false,
    membershipType: 'frontline',
    profileUrl: 'https://gay.hfxns.org/ElderBerries'
  },
  {
    id: 8,
    name: 'La Fédération des aînés et des retraités francophones de l\'Ontario (FARFO)',
    province: 'Ontario',
    description: 'Federation supporting Francophone seniors and retirees in Ontario, including inclusive initiatives.',
    isFeatured: false,
    membershipType: 'allied',
    profileUrl: 'https://farfo.ca/'
  },
  {
    id: 9,
    name: 'L\'ARCG – Aînés et retraités de la communauté gaie',
    province: 'Quebec',
    description: 'Association for gay seniors and retirees in Montreal, offering social activities and support.',
    isFeatured: false,
    membershipType: 'frontline',
    profileUrl: 'https://www.arcmontreal.org/'
  },
  {
    id: 10,
    name: 'Proudly Queer Seniors Northern Ontario, North Bay',
    province: 'Ontario',
    description: 'A group fostering community and support for queer seniors in Northern Ontario, based in North Bay.',
    isFeatured: false,
    membershipType: 'frontline',
    profileUrl: 'https://www.facebook.com/proudlyqueerseniors'
  },
  {
    id: 11,
    name: 'Queer Connection Lanark',
    province: 'Ontario',
    description: 'Connecting and supporting 2SLGBTQI+ individuals and communities in Lanark County, Ontario.',
    isFeatured: false,
    membershipType: 'allied',
    profileUrl: 'https://www.queerconnectionlanark.ca/'
  },
  {
    id: 12,
    name: 'Queer Seniors of Saskatchewan (QSOS)',
    province: 'Saskatchewan',
    description: 'A community group dedicated to supporting and connecting 2SLGBTQI+ seniors across Saskatchewan.',
    isFeatured: false,
    membershipType: 'frontline',
    profileUrl: 'https://www.facebook.com/p/Queer-Seniors-of-Saskatchewan-100069981164692/'
  },
  {
    id: 13,
    name: 'Rainbow Resource Centre - Over the Rainbow Program',
    province: 'Manitoba',
    description: 'A dedicated program offering social support and activities for older 2SLGBTQI+ adults in Manitoba.',
    isFeatured: false,
    membershipType: 'frontline',
    profileUrl: 'https://rainbowresourcecentre.org/support/social-groups/over-the-rainbow/'
  },
  {
    id: 14,
    name: 'Regina\'s Older Adult Group/URPride',
    province: 'Saskatchewan',
    description: 'URPride Centre for Sexuality and Gender Diversity\'s program dedicated to older 2SLGBTQI+ adults in Regina.',
    isFeatured: false,
    membershipType: 'frontline',
    profileUrl: 'https://www.urpride.ca/'
  },
  {
    id: 15,
    name: 'Senior Pride Network Niagara',
    province: 'Ontario',
    description: 'Supporting 2SLGBTQI+ seniors in the Niagara region through community building and resource sharing.',
    isFeatured: false,
    membershipType: 'frontline',
    profileUrl: 'https://www.niagaraknowledgeexchange.com/partners-projects/senior-pride-network-niagara/'
  },
  {
    id: 16,
    name: 'Spark Saskatchewan',
    province: 'Saskatchewan',
    description: 'Supporting 2SLGBTQI+ communities in Saskatchewan through various programs and initiatives.',
    isFeatured: false,
    membershipType: 'allied',
    profileUrl: 'https://www.facebook.com/SparkSask/'
  },
  {
    id: 17,
    name: 'SQUAD (Sudbury)',
    province: 'Ontario',
    description: 'A community group dedicated to supporting 2SLGBTQI+ individuals in Sudbury, fostering inclusion and connection.',
    isFeatured: false,
    membershipType: 'allied',
    profileUrl: 'https://www.squadinc.ca/'
  },
  {
    id: 18,
    name: 'The 519 Community Centre - Older 2SLGBTQI+ Adults Program',
    province: 'Ontario',
    description: 'Dedicated program providing support, resources, and community for older 2SLGBTQI+ adults and seniors in Toronto.',
    isFeatured: false,
    membershipType: 'frontline',
    profileUrl: 'https://www.the519.org/programs/older-2slgbtq-program/'
  }
];

export const getFeaturedMembers = (): Member[] => {
  return memberOrganizations.filter(member => member.isFeatured);
};

export const getMembersByProvince = () => {
  return memberOrganizations.reduce((acc, member) => {
    (acc[member.province] = acc[member.province] || []).push(member);
    return acc;
  }, {} as Record<string, Member[]>);
};