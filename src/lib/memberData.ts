export interface Member {
  id: number;
  name: string;
  province: string;
  description?: string;
  logo?: string;
  isFeatured?: boolean;
  membershipType: 'frontline' | 'allied';
}

export const memberOrganizations: Member[] = [
  { 
    id: 1, 
    name: 'Rainbow Seniors of Montreal', 
    province: 'Quebec',
    description: 'Providing vital social and health services to the 2SLGBTQI+ senior community in Quebec.',
    logo: 'https://placehold.co/120x60/D946EF/FFFFFF?text=RSM',
    isFeatured: true,
    membershipType: 'frontline'
  },
  { 
    id: 2, 
    name: 'ElderCare Toronto', 
    province: 'Ontario',
    description: 'An allied organization creating inclusive long-term care homes in the Greater Toronto Area.',
    logo: 'https://placehold.co/120x60/D946EF/FFFFFF?text=ECT',
    isFeatured: true,
    membershipType: 'allied'
  },
  { 
    id: 3, 
    name: 'Prairies Queer Seniors Alliance', 
    province: 'Saskatchewan',
    description: 'A grassroots network connecting queer elders across Manitoba, Saskatchewan, and Alberta.',
    logo: 'https://placehold.co/120x60/D946EF/FFFFFF?text=PQSA',
    isFeatured: true,
    membershipType: 'frontline'
  },
  { 
    id: 4, 
    name: 'BC Senior Pride Society', 
    province: 'British Columbia',
    membershipType: 'frontline'
  },
  { 
    id: 5, 
    name: 'Calgary Elder Services', 
    province: 'Alberta',
    membershipType: 'allied'
  },
  { 
    id: 6, 
    name: 'Manitoba Queer Seniors Alliance', 
    province: 'Manitoba',
    membershipType: 'frontline'
  },
  { 
    id: 7, 
    name: 'Ontario Senior Care Network', 
    province: 'Ontario',
    membershipType: 'allied'
  },
  { 
    id: 8, 
    name: 'Quebec 2SLGBTQI+ Aînés', 
    province: 'Quebec',
    membershipType: 'frontline'
  },
  { 
    id: 9, 
    name: 'Nova Scotia Pride Elders', 
    province: 'Nova Scotia',
    membershipType: 'frontline'
  },
  { 
    id: 10, 
    name: 'Saskatchewan Seniors United', 
    province: 'Saskatchewan',
    membershipType: 'allied'
  },
  { 
    id: 11, 
    name: 'Alberta Elder Support', 
    province: 'Alberta',
    membershipType: 'frontline'
  },
  { 
    id: 12, 
    name: 'Vancouver Island Elders', 
    province: 'British Columbia',
    membershipType: 'allied'
  },
  { 
    id: 13, 
    name: 'Pride of Prince Edward Island', 
    province: 'Prince Edward Island',
    membershipType: 'frontline'
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