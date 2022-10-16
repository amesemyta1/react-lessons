/* eslint-disable consistent-return */
const baseUrl = 'https://62da9225e56f6d82a7651b64.mockapi.io/api/v1/tasks';

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });

export const fetchTasksList = () =>
  fetch(baseUrl).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
  });

export const updateTask = (id, taskData) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
  });

export const deleteTask = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
