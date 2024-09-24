import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { Section } from "./components/Section/Section";
import { Container } from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import Friendlist from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import profileList from "./data/profileList.json";
import friends from "./data/friendsList.json";
import transactions from "./data/transactionHistory.json"; // Переименовали импорт данных

const App = () => {
  return (
    <>
      <Section>
        <Container>
          <Profile
            avatar={profileList.avatar}
            followers={profileList.stats.followers}
            likes={profileList.stats.likes}
            location={profileList.location}
            tag={profileList.tag}
            username={profileList.username}
            views={profileList.stats.views}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <Friendlist friends={friends} />
        </Container>
      </Section>
      <Section>
        <Container>
          <TransactionHistory items={transactions} />{" "}
        </Container>
      </Section>
    </>
  );
};

export default App;
