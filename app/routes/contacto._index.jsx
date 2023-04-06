import { Outlet } from '@remix-run/react'
import React from 'react'

export function meta(){
   return[
      // información meta
      {title : "Contacto nested"}
   ]
}
const Index = () => {
   // para poder usar Nested router debemos de hacer uso de "guion bajo"
   // ejemplo => contacto._index.jsx
   // https://remix.run/docs/en/1.15.0/file-conventions/route-files-v2#nested-routes
  return (
   <main>
      <h2>hola desde la ruta contacto ☝</h2>
   </main>
  )
}

export default Index