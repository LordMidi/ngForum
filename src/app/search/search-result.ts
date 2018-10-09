import { Post } from '../post';
import { Topic } from '../topic';

export class SearchResult {

  constructor(public topic: Topic, public post: Post) { }

}
