const GetTasks = async (req, res) => {
  
  const TaskList = [
    {
      id: 'Algebra',
      dueDate: '21.07.2023',
      typeClass: 'Math',
      status: 'active',
      description: 'aaa',
      taskRequirements: 'asd',

      },
      {
      id: 'Aerodynamics',
      dueDate: '22.07.2023',
      typeClass: 'Fluid Mechanics',
      status: 'active',
      description: 'aaa',
      taskRequirements: 'asd',
      },
      {
      id: 'Kinetics',
      dueDate: '23.07.2023',
      typeClass: 'Mechanics',
      status: 'active',
      description: 'aaa',
      taskRequirements: 'asd',
      },
];

  return res.send(TaskList);
};

module.exports = { GetTasks };