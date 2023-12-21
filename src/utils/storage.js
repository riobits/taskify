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
