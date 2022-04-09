import { Filelike } from 'web3.storage'
// ignore this error we need to use this prebuilt package because we are using webpack 4 while web3.storage is built for webpack 5 and react is stupid
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

function getAccessToken() {
    // In a real app, it's better to read an access token from an 
    // environement variable or other configuration that's kept outside of 
    // your code base. For this to work, you need to set the
    // WEB3STORAGE_TOKEN environment variable before you run your code.
    // return process.env.WEB3STORAGE_TOKEN

    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdFMDMwQUI4MDU2NzU3ODk3MzBCN2Y1ZjIxYTVEMTY0OGQ1NDQ2NTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDY3NzcxMDc3NDgsIm5hbWUiOiJzZW5pb3IifQ.qH6Sdki17Qibv2JujDeOZUr8SrVOivb1Y_G8klQbdh4'
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() })
}

export async function storeFiles(filePath: FileList) {
    const client = makeStorageClient()
    const cid = await client.put(filePath)
    const res = await client.get(cid)
    console.log('stored files with cid:', cid)
    console.log('Url:', res.url)
   return cid
}

export async function getUrl(filePath: FileList) {
  const client = makeStorageClient()
  const cid = await client.put(filePath)
  const res = await client.get(cid)
  return res.url
}

export async function retrieveFiles(cid: string) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
    }
  
    // unpack File objects from the response
    const files = await res.files()
    for (const file of files) {
      console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
      return file
    }
  }