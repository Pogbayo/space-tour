export interface CrewMember {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    role: string;
    bio: string;
  }