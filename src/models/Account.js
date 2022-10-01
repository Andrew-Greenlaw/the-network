export class Account {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.email = data.email
    this.picture = data.picture
    // TODO add additional properties if needed
    this.subs = data.subs
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated
  }
}
