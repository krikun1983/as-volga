import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Path } from '../../contains/path';
import AboutPage from '../pages/about-page';
import ContactsPage from '../pages/contacts-page';
import MainPage from '../pages/main-page';
import PublishPage from '../pages/publish-page';
import QuestionsAnswersPage from '../pages/questions-answers-page';
import ServicesPage from '../pages/services-page';
import WorksPage from '../pages/works-page';

const Main = (): JSX.Element => {
  return (
    <main>
      <Switch>
        <Route exact path={Path.main} component={MainPage} />
        <Route path={Path.about} component={AboutPage} />
        <Route path={Path.works} component={WorksPage} />
        <Route path={Path.services} component={ServicesPage} />
        <Route path={Path.publish_book} component={PublishPage} />
        <Route path={Path.questions_answers} component={QuestionsAnswersPage} />
        <Route path={Path.contacts} component={ContactsPage} />
        <Route path={Path.errorsPath} component={MainPage} />
      </Switch>
    </main>
  );
};

export default Main;
