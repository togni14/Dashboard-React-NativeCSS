import Card          from './Card';
import ContentHeader from './ContentHeader';
import React         from 'react';
import TeacherList   from './TeacherList';

import '../styles/content.css';

const Content = () => {
  return (
    <div className="content">
        <ContentHeader />
        <Card />
        <TeacherList />
    </div>
  )
}

export default Content
