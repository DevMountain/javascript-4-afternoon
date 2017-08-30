describe('Constructor functions', function() {

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

})