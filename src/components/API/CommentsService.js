import axios from "axios";

export default class CommentsService {
  static async getAll(postId) {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments", {
        params: {
          postId: postId

        }
      })
      return response
    } catch (e) {
      console.log(e)
    }

  }
}
