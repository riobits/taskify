export function getGroups() {
  const groups = localStorage.getItem('groups')
  return groups ? JSON.parse(groups) : []
}

export function addGroup(groupName) {
  const oldGroups = localStorage.getItem('groups')
  const groups = oldGroups ? JSON.parse(oldGroups) : []

  groups.push({
    id: Date.now(),
    updatedAt: new Date(),
    name: groupName,
    tasks: [],
  })

  localStorage.setItem('groups', JSON.stringify(groups))
}

export function deleteGroup(groupId) {
  const oldGroups = localStorage.getItem('groups')
  const groups = oldGroups ? JSON.parse(oldGroups) : []

  const newGroups = groups.filter((group) => group.id !== groupId)

  localStorage.setItem('groups', JSON.stringify(newGroups))
}

export function editGroupName(groupId, name) {
  const oldGroups = localStorage.getItem('groups')
  const groups = oldGroups ? JSON.parse(oldGroups) : []

  const newGroups = groups.map((group) => {
    if (group.id === groupId) {
      return {
        ...group,
        updatedAt: new Date(),
        name,
      }
    }
    return group
  })

  localStorage.setItem('groups', JSON.stringify(newGroups))
}

export function getTasks(groupId) {
  const oldGroups = localStorage.getItem('groups')
  const groups = oldGroups ? JSON.parse(oldGroups) : []

  const group = groups.find((group) => group.id === groupId)

  return group ? group.tasks : []
}

export function addTask(groupId, taskName) {
  const oldGroups = localStorage.getItem('groups')
  const groups = oldGroups ? JSON.parse(oldGroups) : []

  const newGroups = groups.map((group) => {
    if (group.id === groupId) {
      return {
        ...group,
        updatedAt: new Date(),
        tasks: [
          ...group.tasks,
          {
            id: Date.now(),
            name: taskName,
            completed: false,
          },
        ],
      }
    }
    return group
  })

  localStorage.setItem('groups', JSON.stringify(newGroups))
}

export function deleteTask(groupId, taskId) {
  const oldGroups = localStorage.getItem('groups')
  const groups = oldGroups ? JSON.parse(oldGroups) : []

  const newGroups = groups.map((group) => {
    if (group.id === groupId) {
      return {
        ...group,
        updatedAt: new Date(),
        tasks: group.tasks.filter((task) => task.id !== taskId),
      }
    }
    return group
  })

  localStorage.setItem('groups', JSON.stringify(newGroups))
}

export function editTask(groupId, taskId, name) {
  const oldGroups = localStorage.getItem('groups')
  const groups = oldGroups ? JSON.parse(oldGroups) : []

  const newGroups = groups.map((group) => {
    if (group.id === groupId) {
      return {
        ...group,
        updatedAt: new Date(),
        tasks: group.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              name,
            }
          }
          return task
        }),
      }
    }
    return group
  })

  localStorage.setItem('groups', JSON.stringify(newGroups))
}
