export const AuthApi = {
  async login() {
    try {
      return Promise.resolve(false);
    } catch (e: any) {
      throw new Error(e);
    }
  },

  async check() {
    try {
      return Promise.resolve(false);
    } catch (e: any) {
      throw new Error(e);
    }
  },

  // async registration(args: RegistrationType) {
  // 	return instance
  // 		.post<any, AxiosResponse<RegistrationType>>('apilogin', args)
  // 		.then(response => {
  // 			console.log('registration response', response.config)
  // 			return response.data
  // 		})
  // },
};
