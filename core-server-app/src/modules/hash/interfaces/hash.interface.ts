export interface IHash {
	hash: (
		data: Buffer | string,
		options?: {
			salt: Buffer;
			secret: Buffer;
		}
	) => Promise<string>;

	verify: (
		digest: string,
		data: Buffer | string,
		options?: { secret?: Buffer | undefined }
	) => Promise<boolean>;
}
