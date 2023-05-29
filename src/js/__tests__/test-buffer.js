import ArrayBufferConverter from "../index";

describe("ArrayBufferConverter", () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test("should convert ArrayBuffer to string", () => {
    const buffer = new Uint16Array([104, 101, 108, 108, 111]).buffer;

    converter.load(buffer);
    const result = converter.toString();

    expect(result).toBe("hello");
  });

  test("should return empty string if buffer is not loaded", () => {
    const result = converter.toString();

    expect(result).toBe("");
  });
});
