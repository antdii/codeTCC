import React from "react"

import onçaHome from '../../assets/artehome.jpeg';

const Home = () => (
    <div className="xs:pt-8 flex items-center align-center justify-center bg-gray-900">

<div class="flex md:flex-wrap items-center h-full">
      <div class="w-full md:w-1/2 h-full">
        <div class="mx-32">
          <h1 class="text-3xl font-bold mt-16 text-gray-400 text-opacity-75 text-xs tracking-widest">Iniciativa 'Code for Pantanal'</h1>

          <div
            class="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm"
          >
             <p class="leading-relaxed mb-8">O code for Pantanal surge como um projeto para o desenvolvimento de tecnologias cívicas 
            (iniciativas que usam tecnologia para fortalecer a cidadania e melhorar serviços públicos). 
            Constitui-se em sua base como uma derivação do projeto Code for America e, também, do Code 
            for Curitiba, ambos de similar segmento, objetivando a implementação de aplicações open source 
            em busca de criar soluções a problemas cívicos, partindo da participação de qualquer pessoa que 
            queira contribuir com sua construção ou melhoria e de forma gratuita.</p>
            <p class="leading-relaxed mb-8">
              Pretendemos, com esse projeto, gerar presteza significativa para comunidade cívica, 
                por meio das aplicações desenvolvidas e, também, como uma plataforma que é, 
                de certa forma, educativa, a partir do aprendizado prático na área relativa dos 
                interessados na contribuição do projeto.
            </p>
          </div>

        </div>
      </div>
      <div class="bg-red-600 w-auto md:w-1/2 h-auto">
        <img
          src={onçaHome}
          class="h-auto w-auto"
          alt=""
        />
      </div>
    </div>
    </div>
)
export default Home