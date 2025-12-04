// sanity/lib/image.ts
import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '../env'; // adjust path as needed
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
});

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder.image(source);
};
