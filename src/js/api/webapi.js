import { APIUrl } from '../constants/urls'
import * as request from 'superagent'

const WebAPI = {
  login(accessToken) {
    var promise = new Promise((resolve, reject) => {
      request.post(`${APIUrl}/login?token=${accessToken}`)
        .end(function(err, res){
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        })
    })

    return promise
  },

  getActivities() {
    var promise = new Promise((resolve, reject) => {
    request.get(APIUrl + '/events')
      .end(function(err, res){
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })

    return promise
  },

  updateUserProfile(userId, data) {
    var promise = new Promise((resolve, reject) => {
    request.put(`${APIUrl}/user/${userId}`)
      .set('Content-Type', 'application/json')
      .send(data)
      .end(function(err, res){
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })

    return promise
  },

  deleteUserProfile(data) {
    var promise = new Promise((resolve, reject) => {
    request.delete(`${APIUrl}/user/${userId}`)
      .set('Content-Type', 'application/json')
      .send(data)
      .end(function(err, res){
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })

    return promise
  }
}

export default WebAPI
