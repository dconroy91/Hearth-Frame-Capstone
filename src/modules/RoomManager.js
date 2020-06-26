const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/rooms/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/rooms`).then(result => result.json())
  },

  delete(id) {
    return fetch(`http://localhost:5002/rooms/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },

  post(newRoom) {
    return fetch(`${remoteURL}/rooms`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRoom)
    }).then(data => data.json())
},

getWithProjects(id) {
  return fetch(`${remoteURL}/rooms/${id}?_embed=projects`)
          .then(result => result.json())
}

}