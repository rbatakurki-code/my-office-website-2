import { client } from './sanity'

export const getPageContent = async (type: string) => {
  return await client.fetch(`*[_type == "${type}"][0]`)
}