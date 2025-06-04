class Restaurant {
  id: number
  name: string
  description: string
  image: string
  profileImage: string
  rating: number
  infos: string[]

  constructor(id:number, name: string, description: string, image: string, profileImage: string, rating: number, infos: string[]) {
    this.id = id
    this.name = name
    this.description = description
    this.image = image
    this.profileImage = profileImage
    this.rating = rating
    this.infos = infos
  }
}

export default Restaurant
