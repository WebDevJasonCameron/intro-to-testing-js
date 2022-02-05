// helloWorld Function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// sayHello Function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when input is not defined', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! if input is true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" if input is false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    })
});

// isFive Function
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true if input is 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true if input is "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});

// isEven Function
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when input is 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when input is -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when input is 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when input is "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when input is 8', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when input is Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when input is true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when input is false', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when input is not given', function () {
        expect(isEven()).toBe(false);
    });
});






