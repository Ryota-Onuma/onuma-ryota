export type PageProps = {
  isDesktop: boolean;
};

export type Post = {
  slug: string;
  externalUrl?: string;
  content: string;
  title: string;
  date: any;
  thumbnail?: string;
  introduction?: string;
};
