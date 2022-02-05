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


// isVowel Function
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if input is "a"', function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true if input is "A"', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false if input is "y"', function () {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false if input is "4"', function () {
        expect(isVowel('4')).toBe(false);
    });
    it('should return false if input is true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false if input is false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if input is "banana', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if input is empty', function () {
        expect(isVowel()).toBe(false);
    });
});


// add Function
describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a number', function () {
        expect(typeof add()).toBe('number');
    });
    it('should return a 5 if num1 input is 2 and num2 input is 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return a -12 if num1 input is -3 and num2 input is -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return a 11 if num1 input is 5 and num2 input is 6', function () {
        expect(add(5, 6)).toBe(11);
    });
    it('should return a 6 if num1 input is -4 and num2 input is 10', function () {
        expect(add(-4, 10)).toBe(6);
    });
    it('should return NaN if num1 input is "banana" and num2 input is "split"', function () {
        expect(add('banana', 'split')).toBe(NaN);
    });
    it('should return NaN if num1 and num2 inputs are empty', function () {
        expect(add()).toBe(NaN);
    });
});















