export type EventAll = {
  _id: string;
  name: string;
  logo: {
    id: string;
    secure_url: string;
  };
  banner: {
    secure_url: string;
  };
  start_date: string;
  end_date: string;
  location: string;
  description: string;
  host: string;
  tags: string[];
  category: string;
  type: string;
  main_event: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  visible: boolean;
};

export type Event = {
  logo: {
    id: string;
    secure_url: string;
  };
  banner: {
    secure_url: string;
  };
  submission: {
    type: string;
  };
  verified: boolean;
  _id: string;
  name: string;
  start_date: string;
  end_date: string;
  location: string;
  description: string;
  host: {
    photo: {
      logo: {
        id: string;
        secure_url: string;
      };
      cover: {
        id: string;
        secure_url: string;
      };
    };
    _id: string;
    name: string;
    slug: string;
    id: string;
  };
  tags: string[];
  category: string;
  type: string;
  main_event: {
    logo: {
      id: string;
      secure_url: string;
    };
    _id: string;
    name: string;
    id: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  visible: boolean;
  socials: Array<{
    _id: string;
    event: string;
    platform: string;
    link: string;
    __v: number;
    createdAt: string;
    updatedAt: string;
  }>;
  id: string;
};
