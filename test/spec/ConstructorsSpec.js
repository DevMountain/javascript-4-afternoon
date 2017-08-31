describe('Constructor functions', function() {

// problem 1
    describe('Car Factory', function() {
        it('CarFactory function should exist', function() {
            expect(CarFactory).toBeDefined();
        })
        it('CarFactory should be a function', function() {
            expect(CarFactory).toEqual(jasmine.any(Function));
        })
        it('Should build car objects', function() {
            var mustang = new CarFactory('Ford', 'Mustang')
            expect(mustang).toEqual(jasmine.any(Object));
        })
        it('Objects have make & model properties', function() {
            var mustang = new CarFactory('Ford', 'Mustang')
            expect(mustang.model).toEqual('Mustang');
            expect(mustang.make).toEqual('Ford');
        })
    })
// problem 2
    describe('Employee', function() {
        it('bob variable should exist', function() {
            expect(bob).toBeDefined();
        })
        it('bob should be an object', function() {
            expect(bob).toEqual(jasmine.any(Object));
        })
        it('bob should have name, email, and hireDate properties', function() {
            expect(bob.name).toEqual('Bob');
            expect(bob.email).toEqual('bob@gmail.com');
            expect(bob.hireDate).toEqual('01-02-98')
        })
    })
// problem 3
describe('Car', function () {
    it('should exist', function () {
        expect(Car).toBeDefined();
    })
    it('should be a function', function () {
        expect(Car).toEqual(jasmine.any(Function))
    })
    it('should return an object when invoked with new (var prius = new Car(...))', function () {
        var car = new Car('Toyota', 'Prius', 2015);
        expect(car).toEqual(jasmine.any(Object));
    })
    describe('return object', function () {
        it('should have a moveCar method', function () {
            var car = new Car('Toyota', 'Prius', 2015);
            expect(typeof car.moveCar).toBe('function');
            expect(car.moveCar).toEqual(jasmine.any(Function));
        })
        describe('moveCar', function () {
            it('should return a number', function () {
                var car = new Car('Toyota', 'Prius', 2015);
                expect(car.moveCar()).toEqual(jasmine.any(Number));
            })
        })
    })
})

})
