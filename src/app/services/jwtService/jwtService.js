import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

	setInterceptors = () => {
		axios.interceptors.response.use(
			response => {
				return response;
			},
			err => {
				return new Promise((resolve, reject) => {
					if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
						this.setSession(null);
					}
					throw err;
				});
			}
		);
	};

	handleAuthentication = () => {   // SIGNET

		//console.log("Started handleAuthentication...")
		const access_token = this.getAccessToken();

		if (!access_token) {
			this.emit('onNoAccessToken');

			return;
		}

		if (this.isAuthTokenValid(access_token)) {
			
			this.setSession(access_token);
			this.emit('onAutoLogin', true);
		} else {
			this.setSession(null);
			this.emit('onAutoLogout', 'access_token expired');
		}
	};

	createUser = data => {
		return new Promise((resolve, reject) => {
			axios.post('/api/auth/register', data).then(response => {
				if (response.data.user) {
					this.setSession(response.data.access_token);
					resolve(response.data.user);
				} else {
					reject(response.data.error);
				}
			});
		});
	};

	/************************* 4) Actions connecting the API server to retrieve JWT     *********************/


	signInWithEmailAndPassword = (email, password) => {  //SIGNET
		return new Promise((resolve, reject) => {
			
			axios
				//.get('/api/auth', {
				.post(`${process.env.REACT_APP_API_URL}/login/web`, {
					data: {
						email,
						password
					}
				})
				.then(response => {
					if (response.data.user) {
						
						//console.log("response.data.user", response.data.user)

						this.setSession(response.data.access_token);
						
						resolve(response.data.user);
					} else {
						reject(response.data.error);
					}
				});
		});
	};

	/************************* 6) Authenticate user with JWT after loging in    *********************/

	signInWithToken = () => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${process.env.REACT_APP_API_URL}/login/web/access-token`, {
					data: {
						access_token: this.getAccessToken()
					}
				})
				.then(response => {
					if (response.data.user) {

						//console.log("response.data.access_token with new token :", response.data.updatedAccessToken)
						this.setSession(response.data.updatedAccessToken);
						resolve(response.data.user);
					} else {
						this.logout();
						reject(new Error('Failed to login with token.'));
					}
				})
				.catch(error => {
					this.logout();
					reject(new Error('Failed to login with token.'));
				});
		});
	};

	updateUserData = user => {
		return axios.post('/api/auth/user/update', {
			user
		});
	};

	setSession = access_token => {
		if (access_token) {
			localStorage.setItem('jwt_access_token', access_token);
			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
		} else {
			localStorage.removeItem('jwt_access_token');
			delete axios.defaults.headers.common.Authorization;
		}
	};

	logout = () => {
		this.setSession(null);
	};

	isAuthTokenValid = access_token => {
		//console.log("Started isAuthTokenValid...")
		if (!access_token) {
			return false;
		}
		const decoded = jwtDecode(access_token);
		//console.log("Decoded.exp", decoded.exp)
		const currentTime = Date.now() / 1000;
		//console.log("currentTime", currentTime)

		if (decoded.exp < currentTime) {
			console.warn('access token expired');
			return false;
		}

		return true;
	};

	getAccessToken = () => {
		return window.localStorage.getItem('jwt_access_token');
	};
}

const instance = new JwtService();

export default instance;
