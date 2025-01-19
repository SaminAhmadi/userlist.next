'use client';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
// Types
import { userProps } from 'app/userlist/types';
// Components
import UserCard from 'app/userlist/components/user_card';
import Pagination from 'app/userlist/components/pagination';

const Users: FC = () => {
  const [users, setUsers] = useState<userProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const resultsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${currentPage}&results=${resultsPerPage}`,
        );
        setUsers(response.data.results);
        setTotalResults(60);
        console.log(response.data.results, response.data.info.results);
      } catch (err) {
        console.log('Error fetching data', err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 0.5rem' }}>
      {isLoading && <div className="loader"></div>}
      {users.map((data, index) => (
        <UserCard
          key={index}
          id={index}
          picture={data.picture}
          gender={data.gender}
          name={data.name}
          email={data.email}
          location={data.location}
          phone={data.phone}
          login={data.login}
          address={{
            street: data.location.street.name,
            city: data.location.city,
            state: data.location.state,
          }}
        />
      ))}
      {totalResults > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultsPerPage={resultsPerPage}
          totalResults={totalResults}
        />
      )}
    </div>
  );
};
export default Users;
