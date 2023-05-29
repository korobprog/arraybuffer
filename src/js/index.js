export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    if (!this.buffer) {
      return "";
    }

    const bufferView = new Uint16Array(this.buffer);
    const decodedString = String.fromCharCode.apply(null, bufferView);
    return decodedString;
  }
}
