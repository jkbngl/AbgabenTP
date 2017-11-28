$(document).ready(function() 
{
	try 
    {
		$('body').ripples({
			resolution: 256,
			dropRadius: 10, //px
			perturbance: 1,
		});
        
		$('main').ripples({
			resolution: 256,
			dropRadius: 10, //px
			perturbance: 1,
			interactive: false
		});
        
        console.log("ads")
	}
	catch (e) 
    {
		$('.error').show().text(e);
	}
    
    /*
        setInterval(function() 
        {
            var $el = $('main');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;

            $el.ripples('drop', x, y, dropRadius, strength);
        }, 100);
    */
});

