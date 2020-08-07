import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/landing';
import TeacherForm from '../pages/teacherForm';
import TeacherList from '../pages/teacherList';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/study' component={TeacherList} />
      <Route path='/give-classes' component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
