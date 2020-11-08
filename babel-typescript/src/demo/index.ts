export class Demo {
  private subject: string;
  constructor(subject = 'nothing') {
    this.subject = subject;
  }
  display() {
    console.log(`this is demo about "${this.subject}"`);
  }
}
