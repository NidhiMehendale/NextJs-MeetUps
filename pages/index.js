import Head from 'next/head';
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from 'react';

// const DUMMY_MEETUPS = [
//   {
//     id: "M1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "some address 5,12345 some city",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "M2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "some address 5,12345 some city",
//     description: "This is a second meetup!",
//   },
//   {
//     id:"M3",
//     title:"A Third Meetup",
//     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address:"some address 15,some city",
//     description:"This is a Third meetup!",
//   }
// ];

function HomePage(props) {  
  return (
  <Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name='description'
      content='Browse a huge list of highly active React meetups!'
      />
    </Head>
    <MeetupList meetups={props.meetup} />;  
  </Fragment>
  );
}



// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API

//     return {
//         props : {
//             meetup: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
    //fetch data from an API
   
    const client =  await MongoClient.connect('mongodb+srv://nidhimehendale99:mJwUzYxTRAUZOjzq@cluster0.wkgszsn.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

const meetups =  await meetupsCollection.find().toArray();

client.close();

    return {
        props : {
            meetup: meetups.map(meetup => ({
              title:meetup.title,
              address:meetup.address,
              image:meetup.image,
              id: meetup._id.toString(), 
            }))
        },
        revalidate: 1
    };
}
export default HomePage;