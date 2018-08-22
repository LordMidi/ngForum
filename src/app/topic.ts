import { Post } from './post';

/**
 * A forum topic (thread). Includes the posts belonging to the topic. 
 */
export class Topic {

  /**
   * The constructor.
   * @param text text / title of the topic
   * @param posts the posts of the topic
   * @param [id] optional identifier for topic, will use timestamp if not set
   */
  constructor(public text: string, public posts: Post[], public readonly id?: string) {
    if (!id) {
      this.id = Date.now().toString();
    }
  };

  /**
   * Adds a post to the topic.
   * @param post post to add
   */
  addPost(post: Post):void {
    this.posts.push(post);
  }

}
