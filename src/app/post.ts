export class Post {

  constructor (readonly text: string, readonly date: Date = new Date(), public readonly id?: string) {
    if (!id) {
      this.id = Date.now().toString();
    }
  };

}
