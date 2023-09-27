
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "M1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5,12345 some city",
    description: "This is a first meetup!",
  },
  {
    id: "M2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5,12345 some city",
    description: "This is a second meetup!",
  },
  {
    id:"M3",
    title:"A Third Meetup",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address:"some address 15,some city",
    description:"This is a Third meetup!",
  }
];

function HomePage(props) {  
  return <MeetupList meetups={props.meetup} />;  
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


    return {
        props : {
            meetup: DUMMY_MEETUPS
        },
        revalidate: 1
    };
}
export default HomePage;