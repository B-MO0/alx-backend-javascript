import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.allSettled([uploadPhoto(), createUser()])
    .then((data) => {
      const obj = {};
      if (data[0].status === 'fulfilled' && data[1].status === 'fulfilled') {
        obj.photo = data[0].value;
        obj.user = data[1].value;
      } else {
        obj.photo = null;
        obj.user = null;
      }
      return obj;
    });
}
