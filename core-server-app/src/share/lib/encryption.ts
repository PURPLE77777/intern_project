import { hash } from 'argon2';

export const encrypt = (
  data: string,
  options?: {
    salt: Buffer;
    secret: Buffer;
  }
) => {
  try {
    return hash(data, options);
  } catch (e) {
    throw new Error(`Something went wrong with encrypting\n${e}`);
  }
};

export const verify = (
  digest: string,
  data: Buffer | string,
  options?: { secret?: Buffer | undefined }
) => {
  return verify(digest, data, options);
};
