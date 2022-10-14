import React from 'react';
import { connect } from 'react-redux';
import TasksList from './TasksList';
import { getTaskList } from '../tasks/tasks.actions';

const TodoList = () => {
  return (
    <>
      <h1 className="title">TodoList</h1>
      <TasksList />
    </>
  );
};

const mapDispatch = {
  getTaskList,
};

export default TodoList;
