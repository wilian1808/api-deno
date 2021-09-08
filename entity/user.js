export default class User {
	constructor({username, email, password, confirm, created_at, updated_at}) {
		this.username = username
		this.email = email
		this.password = password
		this.confirm = confirm
		this.created_at = created_at
		this.updated_at = updated_at
	}
}

