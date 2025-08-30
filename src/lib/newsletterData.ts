export interface Newsletter {
  id: string;
  title: string;
  date: string;
  url: string;
  description: string;
}

export const newsletters: Newsletter[] = [
  {
    id: "2025-august",
    title: "August 2025",
    date: "August 2025", 
    url: "https://mailchi.mp/5e6958a3a72e/new-spncrfac-email-address-call-for-board-nominations-nouvelle-adresse-courriel-du-spncrfac-appel-de-candidatures-pour-le-conseil-dadmin-49366?e=a69fe97978",
    description: "Pride month special edition with community highlights."
  },
  {
    id: "2025-july",
    title: "July 2025",
    date: "July 2025",
    url: "https://us22.campaign-archive.com/?u=2c2952832a0dfe72fb70dc1a4&id=3335a287be",
    description: "Our latest newsletter featuring community updates and pride initiatives."
  },
  {
    id: "2025-june",
    title: "June 2025",
    date: "June 2025",
    url: "https://us22.campaign-archive.com/?u=2c2952832a0dfe72fb70dc1a4&id=e248751a4a",
    description: "Our latest newsletter featuring community updates and pride initiatives."
  },
  {
    id: "2025-may",
    title: "May 2025",
    date: "May 2025",
    url: "https://us22.campaign-archive.com/?u=2c2952832a0dfe72fb70dc1a4&id=1e3b474c2b", 
    description: "Spring updates and upcoming events."
  },
  {
    id: "2025-april",
    title: "April 2025",
    date: "April 2025",
    url: "https://us22.campaign-archive.com/?u=2c2952832a0dfe72fb70dc1a4&id=1c60723421",
    description: "Community initiatives and member spotlights."
  },
  {
    id: "2025-march",
    title: "March 2025",
    date: "March 2025",
    url: "https://us22.campaign-archive.com/?u=2c2952832a0dfe72fb70dc1a4&id=2a8bf0172f",
    description: "Quarterly updates and resource highlights."
  },
  {
    id: "2025-february",
    title: "February 2025", 
    date: "February 2025",
    url: "https://us22.campaign-archive.com/?u=2c2952832a0dfe72fb70dc1a4&id=de99efa800",
    description: "Winter newsletter with training opportunities."
  },  {
    id: "2025-january",
    title: "January 2025", 
    date: "January 2025",
    url: "https://us22.campaign-archive.com/?u=2c2952832a0dfe72fb70dc1a4&id=b4acfbb475",
    description: "Winter newsletter with training opportunities."
  },
  {
    id: "2024-december",
    title: "December 2022", 
    date: "December 2024",
    url: "https://us22.campaign-archive.com/?u=2c2952832a0dfe72fb70dc1a4&id=48eb85c108 ",
    description: "Winter newsletter with training opportunities."
  }
];

export const getNewsletterById = (id: string): Newsletter | undefined => {
  return newsletters.find(newsletter => newsletter.id === id);
};

export const getAllNewsletters = (): Newsletter[] => {
  return newsletters.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPreviousNewsletter = (currentId: string): Newsletter | null => {
  const sortedNewsletters = getAllNewsletters();
  const currentIndex = sortedNewsletters.findIndex(newsletter => newsletter.id === currentId);
  
  if (currentIndex === -1 || currentIndex === sortedNewsletters.length - 1) {
    return null; // No previous newsletter (or newsletter not found)
  }
  
  return sortedNewsletters[currentIndex + 1];
};

export const getNextNewsletter = (currentId: string): Newsletter | null => {
  const sortedNewsletters = getAllNewsletters();
  const currentIndex = sortedNewsletters.findIndex(newsletter => newsletter.id === currentId);
  
  if (currentIndex === -1 || currentIndex === 0) {
    return null; // No next newsletter (or newsletter not found)
  }
  
  return sortedNewsletters[currentIndex - 1];
};