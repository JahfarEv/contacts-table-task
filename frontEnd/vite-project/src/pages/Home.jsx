import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4002/api/get-contacts"
        );
        setContacts(response.data.data.contact);
        console.log(response.data.data.contact);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDatas();
  }, []);
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" class="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-4">
                    CreatedBy
                  </th>
                  <th scope="col" class="px-6 py-4">
                    CreatedAt
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Action
                  </th>
                  <th scope="col" class="px-6 py-4">
                  <Link to='/create-contact'><IoPersonAddOutline /></Link>
                    
                  </th>
                </tr>
              </thead>
              {contacts.map((contact) => (
                <tbody>
                  <tr class="border-b border-neutral-200 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4">{contact.name}</td>
                    <td class="whitespace-nowrap px-6 py-4">{contact.email}</td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {contact.phoneNumber}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {contact.phoneNumber}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {contact.phoneNumber}
                    </td>
                    <button
                      type="button"
                      className="bg-red-600 text-white font-bold rounded-md m-5 p-1"
                    >
                      SPAM
                    </button>
                  </tr>
                  {/* <tr class="border-b border-neutral-200 dark:border-white/10">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                <td class="whitespace-nowrap px-6 py-4">@fat</td>
              </tr>
              <tr class="border-b border-neutral-200 dark:border-white/10">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td class="whitespace-nowrap px-6 py-4">Larry</td>
                <td class="whitespace-nowrap px-6 py-4">Wild</td>
                <td class="whitespace-nowrap px-6 py-4">@twitter</td>
              </tr> */}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
