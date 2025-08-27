/* eslint-disable @typescript-eslint/no-explicit-any */

// ImageUrl.ts
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

const imageUtils = {
  urlFor,
};

export default imageUtils;