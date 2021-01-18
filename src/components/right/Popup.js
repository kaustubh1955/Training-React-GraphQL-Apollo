import React, {useState} from 'react';
import '../../styles/Popup.css'
import cross from "../../Images/Close.png";
import fb from "../../Images/FB-icon-black.png";
import tw from "../../Images/Twitter-icon-black.png";
import ld from "../../Images/linkedin-icon-black.png";
import {useMutation, gql} from '@apollo/client';

const ADD_TO_TABLE = gql`
  mutation addToTable($email: String!, $message: String!) {
    sendMessage(email: $email, message: $message) {
      message
    }
  }
`;

const Popup = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [createLink] = useMutation(ADD_TO_TABLE, {
    variables: {
      email: formState.email,
      message: formState.message,
    },
  });

  return (
    <div className='popup'>
      <div className='popup_inner'>
        <img onClick={props.clicked} src={cross} height="16.97" width='16.97' className="imaas" alt="cross"/>
        <h1>Contact</h1>
        <p className="Lorem">Lorem Ipsum is simply dummy text of the printing</p>
        <form className='formclass' 
            onSubmit={(e) => {
            e.preventDefault();
            createLink();
            alert("Message successfully submitted. Thank you for your time!");
        }}
        method="POST"
        >
        <input type="text" className="inputclass" placeholder="Name           Enter your name here." 
        value={formState.name} 
        onChange={(e) =>
        setFormState({
            ...formState,
            name: e.target.value
        })
        }
        >
        </input><br/>
        <input type="text" className="inputclass" placeholder="E-mail         Enter your e-main address here."  
        value={formState.email} onChange={(e) =>
        setFormState({
            ...formState,
            email: e.target.value
        })
        }
        ></input><br />
        <input type="text" className="inputclass" placeholder="Message         Wanna share something with us?" 
        value={formState.message} onChange={(e) =>
          setFormState({
              ...formState,
              message: e.target.value
          })
        }
        ></input><br/>
        <button type='submit' className='submitbutton' value='Submit' >
          Submit
        </button>
        </form>
        <p idName='bloc' float='left' className="Info">Need more info? hello@newzera.com</p>
        <div className="space">
          <a idName="bloc1" align='right' href="https://www.facebook.com/newzeraapp"><img src={fb} height='11' width='10' /></a>
          <a idName="bloc2" className="formargin" href="https://www.linkedin.com/company/newzera/"><img src={ld} height='10.5' width='10.5' /></a>
          <a idName="bloc3" className="formargin" href="https://twitter.com/newzeraapp"><img src={tw} height='10.5' width='10.5' /></a>
        </div>
      </div>
    </div>
  );
};

export default Popup;