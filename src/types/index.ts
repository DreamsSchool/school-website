export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
}

export interface Faculty {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
}
