export function getGroups() {
  const groups = localStorage.getItem('groups')
  return groups ? JSON.parse(groups) : []
}

export function addGroup(groupName) {
  const oldGroups = localStorage.getItem('groups')
  const groups = oldGroups ? JSON.parse(oldGroups) : []

  groups.push({
    id: Date.now(),
    createdAt: new Date(),
    name: groupName,
    tasks: [],
  })

  localStorage.setItem('groups', JSON.stringify(groups))
}
