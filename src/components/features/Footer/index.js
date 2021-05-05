import React from 'react'
import onçaLogo from '../../../assets/onça.png';

const Footer = () => (
  <footer class="text-gray-400 bg-gray-900 body-font" >
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img class="flex-col bg-brand w-12 h-12 
                            rounded-full justify-center items-center text-center cursor-pointer" src={onçaLogo} alt="CfP"/>
        <span class="ml-3 text-xl">Code for Pantanal</span>
      </a>
      <p class="text-sm text-gray-400 sm:ml-4 items-center sm:pl-4 
              sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2021</p>
    </div>
  </footer>
)

export default Footer