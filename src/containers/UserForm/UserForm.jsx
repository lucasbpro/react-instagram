import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';
import {addUser} from '../../service';

import {LABEL_FORM_NAME,
        LABEL_FORM_USERNAME,
        LABEL_FORM_EMAIL,
        LABEL_FORM_PROFILE_IMAGE,
        PLACEHOLDER_INPUT_NAME,
        PLACEHOLDER_INPUT_USERNAME,
        PLACEHOLDER_INPUT_EMAIL,
        PLACEHOLDER_PROFILE_IMAGE,
        LABEL_BUTTON_CADASTRAR} from '../../constants';

import './UserForm.scss';

const UserForm = () => {

  const [isUserAdded, setUserAdded] = useState(false);
  const [name, setName] = useState([]);
  const [username, setUserName] = useState([]);
  const [email, setEmail] = useState([]);
  const [imageUrl, setImageURL] = useState([]);

  const handleAddUser = (event) => {
      const userInfo = JSON.stringify({"name": name,
                                       "avatar": imageUrl,
                                       "username": username,
                                        "email": email
                                      });

      addUser(userInfo).then(setUserAdded(true));
  };

  return (
    <React.Fragment>

      {isUserAdded && <SuccessMessage/>}

      <section data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img src="./App/profile-img-default.png" alt="img-default"/>
              </div>
              <p className="user__name">
                {name} <span>@{username}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
              
      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>{LABEL_FORM_NAME}</label>
            <input type="text" 
                    placeholder={PLACEHOLDER_INPUT_NAME} 
                    onChange={(event)=>setName(event.target.value)}/>
            
            <label>{LABEL_FORM_USERNAME}</label>
            <input type="text" 
                    placeholder={PLACEHOLDER_INPUT_USERNAME} 
                    onChange={(event)=>setUserName(event.target.value)}/>
            
            <label>{LABEL_FORM_EMAIL}</label>
            <input type="text" 
                    placeholder={PLACEHOLDER_INPUT_EMAIL} 
                    onChange={(event)=>setEmail(event.target.value)} />
            
            <label>{LABEL_FORM_PROFILE_IMAGE}</label>
            <input type="text" 
                    placeholder={PLACEHOLDER_PROFILE_IMAGE}
                    onChange={(event)=>setImageURL(event.target.value)} />
          </div>       

          <button type="button"
                  onClick={(event)=>handleAddUser(event)}>
            {LABEL_BUTTON_CADASTRAR}
          </button>
        </div>
      </section>
      }
    </React.Fragment>
  );
};

export default UserForm;
