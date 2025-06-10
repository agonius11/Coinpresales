export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
}

export interface NewsletterFormData {
  email: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
