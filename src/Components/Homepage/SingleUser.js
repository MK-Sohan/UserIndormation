import React from 'react';
import {
  FaFacebookF,
  FaTelegram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleUser = ({ value }) => {

  const { firstName, lastName, email, image, id, address, company } = value || {}

  return (
    <div role="listitem" class=" relative mt-16 mb-32 sm:mb-24 w-[360px] ">
      <div class="rounded overflow-hidden shadow-md bg-white pb-7">
        <div class="absolute -mt-20 w-full flex justify-center ">
          <div class="h-32 w-32">
            <img
              src={image}
              alt="Display Picture of Andres Berlin"
              role="img"
              class="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div class="px-6 mt-16 ">
          <Link to={`/user/${id}`}>
            <p class="text-black text-lg mt-3 text-start">
              <span className="text-xl font-bold">First Name : </span> {firstName}
            </p>
            <p class="text-black text-lg mt-3 text-start">
              <span className="text-xl font-bold">Last Name : </span> {lastName}
            </p>
          </Link>
          <p class="text-black text-lg mt-1 text-start">
            <span className="text-xl font-bold">Email : </span>{" "}
            {email}
          </p>
          <p class="text-black text-lg mt-1 ">
            <span className="text-xl font-bold">Address :  </span>{address?.address}
            <br />( <span className='text-center'>City: {address?.city} </span>
            )
          </p>
          <p class="text-black text-lg mt-1 text-start">
            <span className="text-xl font-bold">Company : </span>{" "}
            {company?.name}
          </p>
          {/* <div class="w-full flex justify-center pt-5 pb-5">
              <a href={value.facebook} class="mx-5">
                <div
                  className="text-xl text-white flex justify-center items-center red  h-[40px] w-[40px] "
                  aria-label="Github"
                  role="img"
                >
                  <FaFacebookF />
                </div>
              </a>

              <a href={value.app} class="mx-5">
                <div
                  className="text-2xl font-extrabold  text-white flex justify-center items-center red  h-[40px] w-[40px] "
                  aria-label="Github"
                  role="img"
                >
                  <FaWhatsapp />
                </div>
              </a>
              <a href={value.telegram} class="mx-5">
                <div
                  className="text-xl text-white flex justify-center items-center red  h-[40px] w-[40px] "
                  aria-label="Github"
                  role="img"
                >
                  <FaTelegram />
                </div>
              </a>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default SingleUser;