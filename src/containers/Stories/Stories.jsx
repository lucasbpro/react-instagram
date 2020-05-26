import React, { useState } from "react";

import Story from '../../components/Story';
import './Stories.scss';

const Stories = ({stories, getUserInfo}) => {

  const [showStory, toggleShowStory] = useState(false);
  const [clickedStory, setClickedStory] = useState({});

  const handleClickStory = (story) => {

      setClickedStory(story);
      toggleShowStory(true);

      return null
  }

  return (
    <React.Fragment>
      <section data-testid="stories" className="stories">
        <div className="container">

          {stories.map((story) => {
            const userInfo = getUserInfo(story.userId);

            if(userInfo === undefined)
              return null;

            return (
              <button
                key={story.id}
                onClick={() => handleClickStory(story)}
                className="user__thumb"
              >
                <div className="user__thumb__wrapper">
                  <img src={userInfo.avatar} alt={userInfo.name} />
                </div>
              </button>
            )})
          }

        </div>
      </section>

      {showStory && (
        <Story 
          story = {clickedStory}
          userInfo = {getUserInfo(clickedStory.userId)}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
