export class Demo {
  constructor(subject = 'nothing') {
    this.subject = subject;
  }
  display() {
    console.log(`this is demo about "${this.subject}"`);
  }
}
