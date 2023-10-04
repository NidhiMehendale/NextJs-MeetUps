import NewMeetupForm from "../../components/meetups/NewMeetUpForm";
import Head from "next/head";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
   
    const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers:{
            'Content-Type': 'application/json'
        }
    
    });

    const data = response.json();
    console.log(data);
  }

  return (
    <Fragment>
    <Head>
      <title>Add a New Meetup</title>
      <meta name='description'
      content='Add your own meetups'
      />
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </Fragment>
  ) 
}

export default NewMeetupPage;