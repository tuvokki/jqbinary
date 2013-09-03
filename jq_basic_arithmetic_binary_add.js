  (function($) {
  
   $.fn.extend({
  
    // kinda private binary_add to prevent the usage of the + operator
    badd: function(a, b) {
      while (b) {
        var carry = a & b;
        a = a ^ b;
        b = carry << 1;
      }
      return a;
    },
  
    // $(...).number( num )
    //     Save the number 'num' in the jQuery data
    //     for the selected element(s), and return 'this'
    //     for chaining.
    // $(...).number()
    //     Return the number stored in the jQuery data
    //     for the selected elements(s).
    number: function(num) {
     if (arguments.length == 0) return this.data('number');
     this.data('number', num);
     return this;
    },
  
    // $(...).add( num )
    //     Add the number 'num' to the number stored
    //     in the jQuery data for the selected element(s)
    add: function(num) {
     return this.number(this.badd(this.number(), num));
    }
   });
  
  })(jQuery);
