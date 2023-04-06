import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts
} from "@remix-run/react";
import style from '~/styles/app.css';

// informacion meta
export function meta(){
   return [
      {charSet : 'utf-8'},
      { 
         name : "viewport", 
         content : "width=device-width, initial-scale=1.0"
      },
      {title : "Example meta V2"}
   ]
}
export function links(){
   return[
      {
         rel : 'stylesheet',
         href : style
      }
   ]
}

export default function App(){
   return(
      <Document>
         <Outlet/>
      </Document>
   )
}
function Document({children}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
         {children}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
