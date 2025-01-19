// User data props
import { Dispatch, SetStateAction } from 'react';

export interface userProps {
  id: number;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  gender: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    country: string;
    city: string;
    state: string;
    street: {
      number: number;
      name: string;
    };
  };
  phone: string;
  login: {
    username: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
  };
}

// User List result props
export interface userList {
  results: userProps[];
}

// pagination props
export interface paginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalResults: number;
  resultsPerPage: number;
}
