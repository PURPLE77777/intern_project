import { IHash } from './interfaces/hash.interface';

export class HashService {
	constructor(private readonly crypto: IHash) {}

	async encrypt(
		data: string,
		options?: {
			salt: Buffer;
			secret: Buffer;
		}
	) {
		try {
			return this.crypto.hash(data, options);
		} catch (e) {
			throw new Error(`Something went wrong with encrypting\n${e}`);
		}
	}

	async verify(
		digest: string,
		data: Buffer | string,
		options?: { secret?: Buffer | undefined }
	) {
		return this.crypto.verify(digest, data, options);
	}
}
