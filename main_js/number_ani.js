$(document).ready(function(){

    var $page5Data = $page5_counters.find('h3');
    var $counterExecuted = fales;

    if (!$counterExecuted) {
        if ($('.page5').attr('pageNum') == 5) {
            $page5Data.each(function () {
                var $current = $(this);
                var $target = $current.attr('data-rate');

                $({ rate: 0 }).animate({ rate: $target }, {
                    duration: 2500,
                    progress: function () {
                        var now = this.rate;
                        $current.text(Math.ceil(now));
                    }
                });
            });
            $counterExecuted = true;
        }
    }

});
