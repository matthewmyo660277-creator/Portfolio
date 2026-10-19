export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  details?: string;
  certificates?: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
}