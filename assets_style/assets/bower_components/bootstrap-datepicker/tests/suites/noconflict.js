<<<<<<< HEAD
module('NoConflict', {
    setup: function(){
        var datepicker = $.fn.datepicker.noConflict();
        $.fn.bootstrapDP = datepicker;
    },
    teardown: function(){
        $.fn.datepicker = $.fn.bootstrapDP;
        delete $.fn.bootstrapDP;
    }
});

test('Datepicker starts after calling noConflict() (no undefined defaults or locale_opts)', function(){
    $('<div class="input-append date" id="datepicker">'+
        '<input size="16" type="text" value="12-02-2012" readonly>'+
        '<span class="add-on"><i class="icon-th"></i></span>'+
        '</div>')
        .appendTo('#qunit-fixture')
        .bootstrapDP();
    expect(0);
});
=======
module('NoConflict', {
    setup: function(){
        var datepicker = $.fn.datepicker.noConflict();
        $.fn.bootstrapDP = datepicker;
    },
    teardown: function(){
        $.fn.datepicker = $.fn.bootstrapDP;
        delete $.fn.bootstrapDP;
    }
});

test('Datepicker starts after calling noConflict() (no undefined defaults or locale_opts)', function(){
    $('<div class="input-append date" id="datepicker">'+
        '<input size="16" type="text" value="12-02-2012" readonly>'+
        '<span class="add-on"><i class="icon-th"></i></span>'+
        '</div>')
        .appendTo('#qunit-fixture')
        .bootstrapDP();
    expect(0);
});
>>>>>>> b25a00fcb1272ed18538d57426506e9359084f17
