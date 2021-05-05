import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../library/Button"
import { ArrowRightIcon, EyeIcon } from '@heroicons/react/outline'


const CardSugestao = ({
  titulo,
  progresso,
  descricao,
  colaborador
}) => (
    <div class="p-12 w-1/2 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-gray-800 
              text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">{progresso}</span>
        <h2 class="sm:text-3xl text-2xl title-font 
          font-medium text-white mt-4 mb-4">{titulo}</h2>
        <p class="leading-relaxed mb-8">
          {descricao}
          </p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 
              border-gray-800 border-opacity-75 mt-auto w-full">
          <a class="text-indigo-400 inline-flex items-center">Saiba mais
            <ArrowRightIcon class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </a>
          <span class="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
            <EyeIcon class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" 
                      stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"/>1.2K
          </span>
          <span class="text-gray-500 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-white">{colaborador}</span>
            <span class="text-gray-500 text-xs tracking-widest mt-0.5">DEVELOPER</span>
          </span>
        </a>
      </div>
)


export default CardSugestao