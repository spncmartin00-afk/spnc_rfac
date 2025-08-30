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
    description: 'non-profit organization that brings together and supports English-speaking older adults and seniors (50+) in the 2SLGBTQIA+ community in and around Montréal',
    logo: '/members/gay&gray.png',
    isFeatured: true,
    membershipType: 'frontline',
    profileUrl: 'https://gayandgreymontreal.com/'
  },
  { 
    id: 2, 
    name: 'Dignity Seniors Society', 
    province: 'Vancouver',
    description: 'An advocacy group advancing culturally appropriate services for 2SLGBTQIA+ seniors.',
    logo: '/members/diginityseniors.png',
    isFeatured: true,
    membershipType: 'frontline',
    profileUrl: 'https://www.dignityseniors.org/#gsc.tab=0'
  },
  { 
    id: 3, 
    name: 'Ottawa Senior Pride Network', 
    province: 'Ottawa',
    description: 'A grassroots network connecting queer elders across Manitoba, Saskatchewan, and Alberta.',
    logo: '/members/ottawa_senior.png',
    isFeatured: true,
    membershipType: 'frontline',
    profileUrl: 'https://ospn-rfao.ca/'
  },
 
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