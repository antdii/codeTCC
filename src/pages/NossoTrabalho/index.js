import React from "react"
import CardSugestao from "../../components/features/CardsSugestao"

const NossoTrabalho = () => (
  <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <CardSugestao 
        progresso="ANDAMENTO" 
        titulo="Aplicativo de rotas de ônibus (exemplo)" 
        descricao="Aqui estará a descrição geral da ideia do aplicativo de rotas de ônibus.
        O progresso acima e demais detalhes serão inseridos assim que a ideia for cadastrada pelo usuário" 
        colaborador="Xuxu Belo"/>
      <CardSugestao 
        progresso="EM ANÁLISE" 
        titulo="Aplicativo para notificar ruas escuras" 
        descricao="Aqui estará a descrição geral da ideia do aplicativo Aplicativo para notificar ruas escuras.
        O progresso acima e demais detalhes serão inseridos assim que a ideia for cadastrada pelo usuário" 
        colaborador="Jaum Mestre"/>
      <CardSugestao 
        progresso="EM PROGRAMAÇÃO" 
        titulo="Aplicativo para notificar buracos na via" 
        descricao="Aqui estará a descrição geral da ideia do aplicativo Aplicativo para notificar buracos na via.
        O progresso acima e demais detalhes serão inseridos assim que a ideia for cadastrada pelo usuário" 
        colaborador="Pedro Jorge"/>
    </div>
  </div>
</section>
)
export default NossoTrabalho