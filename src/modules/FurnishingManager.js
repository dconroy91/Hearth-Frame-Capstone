const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/furnishings/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/furnishings`).then(result => result.json())
  },

  delete(id) {
    return fetch(`http://localhost:5002/furnishings/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },

  post(newFurnishing) {
    return fetch(`${remoteURL}/furnishings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFurnishing)
    }).then(data => data.json())
}
}