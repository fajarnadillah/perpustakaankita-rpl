<<<<<<< HEAD
module('Methods (jQuery)', {
    setup: function(){
        this.$inputs = $('<input><input>')
            .datepicker()
            .appendTo('#qunit-fixture');
    },
    teardown: function(){
        this.$inputs.each(function(){
            $.data(this, 'datepicker').picker.remove();
        });
    }
});

test('Methods', function(){
    [
        'show',
        'hide',
        'setValue',
        'place'
    ].forEach($.proxy(function(index, value){
        var returnedObject = this.$inputs.datepicker(value);

        strictEqual(returnedObject, this.$inputs, "is jQuery element");
        strictEqual(returnedObject.length, 2, "correct length of jQuery elements");
    }, this));
});
=======
module('Methods (jQuery)', {
    setup: function(){
        this.$inputs = $('<input><input>')
            .datepicker()
            .appendTo('#qunit-fixture');
    },
    teardown: function(){
        this.$inputs.each(function(){
            $.data(this, 'datepicker').picker.remove();
        });
    }
});

test('Methods', function(){
    [
        'show',
        'hide',
        'setValue',
        'place'
    ].forEach($.proxy(function(index, value){
        var returnedObject = this.$inputs.datepicker(value);

        strictEqual(returnedObject, this.$inputs, "is jQuery element");
        strictEqual(returnedObject.length, 2, "correct length of jQuery elements");
    }, this));
});
>>>>>>> b25a00fcb1272ed18538d57426506e9359084f17
