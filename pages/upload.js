// import React from "react";
// import Uploadforum from "./Components/Uploadforum";
// function upload() {
//   return (
//     <div>
//       <Uploadforum />
//     </div>
//   );
// }
// // export default upload;

// import { getSession, useSession } from 'next-auth/client'

// export async function getServerSideProps(context) {
//   const [session, loadingSession] = useSession();

//   const session = await getSession(context);
//   if (!session) {
//     context.res.writeHead(302, { Location: '/' });
//     context.res.end();
//     return {};
//   }
//   return {
//     props: {
//       user: session.user,
//     }
//   }
// }
// export default Upload;
import React from "react";
import Uploadforum from "./Components/Uploadforum";
import { getSession, useSession } from 'next-auth/react'

function upload() {
  const { data: session } = useSession();
  return (
    <div>
      <Uploadforum session={session} />
    </div>
  );
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    }
  }
}
export default upload;
