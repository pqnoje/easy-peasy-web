export class Buyer {
	name: string
	username: string
	password: string

	constructor (name: string, username: string, password: string) {
		this.username = username
		this.name = name
		this.password = password
	}
}
