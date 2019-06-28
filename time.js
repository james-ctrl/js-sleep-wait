function wait_times_until(interval, times, is_true_func, run_func, args) {
    is_true_func = typeof(is_true_func) == "function" ? is_true_func : function() {return false;};
    run_func = typeof(run_func) == "function" ? run_func :  function() {return;};

    if (interval < 0) {
		return;
    }

    if (times <= 0 || is_true_func()) {
        run_func(args);
        return;
    }

    setTimeout(
        function() {
            //show(args + " " + times); // just for test
            times = times - 1;
            if (!is_true_func()) {
                wait_times_until(interval, times, is_true_func, run_func, args)
            }
        },
        interval
    );
}

function wait_until(ms, is_true_func, run_func, args) {
    var interval = 100
    var times = ms/interval
    wait_times_until(interval, times, is_true_func, run_func, args)
}

function wait_do(ms, run_func, args) {
    wait_until(ms, false, run_func, args);
}

var sleep = wait_do;
