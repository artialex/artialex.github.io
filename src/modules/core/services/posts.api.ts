// @ts-nocheck
import axios from 'axios'
import getConfig from 'next/config'

import { PostId } from '../@types/Post'

// -- Setup ----------------------------------------------------------------------------------------

let { publicRuntimeConfig } = getConfig()

let instance = axios.create({
  baseURL: publicRuntimeConfig.apiUrl + '/posts',
  headers: {
    'Content-Type': 'application/json',
  },
})

// -- Methods --------------------------------------------------------------------------------------

export function getAll(): Promise<GetAllResponse> {
  let response = instance.get()

  return response.data
}

export function get(id: PostId): Promise<GetResponse> {
  let response = instance.get()

  return response.data
}

export function create(): Promise<CreateResponse> {
  let response = instance.post()

  return response.data
}

// -- Types ----------------------------------------------------------------------------------------

type GetAllResponse = {}

type GetResponse = {}

type CreateResponse = {}
