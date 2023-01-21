// import React, { useState } from "react";
// import style from "../../styles/Home.module.css";
// import Link from "next/link";
// import axios from "axios";

// import { signIn, signOut, useSession } from 'next-auth/client'

// const [session, loadingSession] = useSession();

// function Displayforum(response) {
//   const [answer, setAnswer] = useState("")
//   const [id, setId] = useState("");
//   const [a, formerArray] = useState([]);

//   const [show, setShow] = useState(false);
//   // const [response, setResponse] = useState(response);
//   console.log("what is response then? ", response);
//   const submitAnswer = () => {
//     try {
//       // axios.put(`http://localhost:1337/forums/${id}`, {
//       //   Answers: [...a, answer],
//       //   Answername: session.user.name,
//       // });
//       axios.put(`http://localhost:1337/forums/${id}`, {
//         Answers: [...a, [session.user.name, answer]],
//       });
//     } catch (error) {
//       console.log(error);
//       // } catch (error) {
//       //   console.log(error);
//       // }
//     };

//     if (loadingSession) {
//       <>
//         <p>logging in</p>
//       </>;
//     }
//     return (
//       <div>
//         {!session && (
//           <>
//             <h1>Sign in to access forum</h1>
//             <button onClick={() => signIn()}>Sign In</button>
//           </>
//         )}
//         {session && (
//           <>
//             {/*rest of our app*/}
//             <div>
//               <div className={style.topcont}>
//                 <h1 className={style.heading}>Display forum</h1>
//                 {
//                   console.log("The value of response in JSX is still, ", response, response.response, response.response.data)
//                 }
//                 {
//                   response && response.response.data && response.response.data.map((response, index) => {
//                     console.log("The response is is is ", response)

//                     return (
//                       <div key={index} className={style.userinfo}>
//                         {response.id}
//                         <p className={style.answertext}>
//                           {response.attributes.Answers}
//                           {response.attributes.Questions}
//                         </p>
//                         <p>
//                           {response.attributes.Title}
//                         </p>
//                         <p>
//                           {response.attributes.createdAt}
//                         </p>
//                         <p>
//                           {response.attributes.publishedAt}
//                         </p>
//                         <p>
//                           {response.attributes.updatedAt}
//                         </p>
//                         {/* {response.Answers.map((answers, i) => (
//                   <div className={style.eachanswer} key={i}>
//                     <p className={style.username}>{response.Answername}</p>
//                     <p className={style.answertext}>{answers}</p>
//                   </div>
//                 ))} */}
//                       </div>
//                     )
//                   }
//                   )
//                 }

//                 <div>
//                   {/* <Link href="/upload">
//                   <button>Ask a question</button>
//                 </Link> */}
//                   {/* <button>Login</button> */}

//                   <Link href="/upload">
//                     <button>Ask a question</button>
//                   </Link>
//                   <button onClick={() => signOut()}>Signout</button>

//                 </div>
//               </div>
//               <h2 className={style.subheading}>Questions</h2>
//               <div className={style.userinfo}>
//                 <p>Posted By: Victory Tuduo</p>
//               </div>
//               <div className={style.questioncont}>
//                 <p className={style.question}>Description of the Question</p>
//               </div>
//               <div className={style.answercont}>
//                 <h2 className={style.subheading}>Answers</h2>
//                 <div className={style.inputanswer}>
//                   <form>
//                     {/* <textarea type="text" placeholder="Enter your answer" rows="5" />
//             <button>Post</button> */}
//                     <textarea
//                       type="text"
//                       placeholder="Enter your answer"
//                       rows="5"
//                       value={answer}
//                       onChange={(e) => setAnswer(e.target.value)}
//                     />
//                     <button onClick={() => {
//                       setId(response.id);
//                       formerArray(response.Answers);
//                       submitAnswer()
//                     }}>Post</button>
//                   </form>
//                 </div>
//                 <button className={style.showanswer} onClick={() => setShow(!show)}>
//                   {show ? "Hide Answers" : "Show Answers"}
//                 </button>

//                 <div className={style.answers}>
//                   {response.Answers.map((answers, i) => (
//                     <div className={style.eachanswer} key={i}>
//                       <p className={style.username}>{answers[0]}</p>
//                       <p className={style.answertext}>{answers[1]}</p>
//                     </div>
//                   ))}

//                   {show ? (
//                     <div>
//                       <div className={style.answers}>
//                         <div className={style.eachanswer}>
//                           <p className={style.username}>Miracle</p>
//                           <p className={style.answertext}>Try doing it Like this</p>
//                         </div>
//                       </div>
//                       <div className={style.answers}>
//                         <div className={style.eachanswer}>
//                           <p className={style.username}>Miracle</p>
//                           <p className={style.answertext}>Try doing it Like that</p>
//                         </div>
//                       </div>
//                     </div>
//                   ) : null}
//                 </div>
//               </div>
//             </>
//       )}
//           </div>
//   // return (

//   // );
// }
//         export default Displayforum;
import React, { useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
//...

function Displayforum({ response }) {
  console.log(response);
  const { data: session } = useSession();
  const [answer, setAnswer] = useState("");
  const [id, setId] = useState("");
  const [a, formerArray] = useState([]);
  const [show, setShow] = useState(false);

  console.log(session);
  const submitAnswer = () => {
    try {
      axios
        .put(`http://localhost:1337/api/strapi-forums/${id}`, {
          data: {
            Answers: [...a, [session.user.name, answer]],
            Answername: session.user.name,
          },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!session && (
        <>
          <h1>Sign in to access forum</h1>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )}

      {session && (
        <>
          <div className={style.topcont}>
            <p>Signed in as {session.user.email}</p>
            <h1 className={style.heading}>Display forum</h1>
            <div>
              <Link href="/upload">
                <button>Ask a question</button>
              </Link>
              <button onClick={() => signOut()}>Signout</button>
            </div>
          </div>
          {response.map((response, index) => (
            <div key={index}>
              <h2 className={style.subheading}>{response.attributes.Title}</h2>
              <div className={style.userinfo}>
                <p>Posted By: {response.attributes.Username}</p>
              </div>
              <div className={style.questioncont}>
                <p className={style.question}>
                  {response.attributes.Questions}
                </p>
              </div>
              <div className={style.answercont}>
                <h2 className={style.subheading}>Answers</h2>
                <div className={style.inputanswer}>
                  <form>
                    <textarea
                      type="text"
                      placeholder="Enter your answer"
                      rows="5"
                      value={answer}
                      onChange={(e) => {
                        formerArray(response.attributes.Answers);
                        setAnswer(e.target.value);
                        setId(response.id);
                      }}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        submitAnswer();
                      }}
                    >
                      Post
                    </button>
                  </form>
                </div>
                <button
                  className={style.showanswer}
                  onClick={(e) => {
                    setShow(!show);
                  }}
                  key={index}
                >
                  {show ? "Hide Answers" : "Show Answers"}
                </button>
                {show ? (
                  <div className={style.answers}>
                    {response.attributes.Answers.map((answers, i) => (
                      <div className={style.eachanswer} key={i}>
                        <p className={style.username}>{answers[0]}</p>
                        <p className={style.answertext}>{answers[1]}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
export default Displayforum;
